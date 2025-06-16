import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

interface AuthTokens {
  accessToken: string | null
  refreshToken: string | null
}

interface RefreshTokenResponse {
  accessToken: string
  refreshToken?: string
}

type TokenStorageType = 'localStorage' | 'cookie'

interface ApiClientConfig {
  baseURL: string
  timeout: number
  refreshEndpoint: string
  loginRedirect: string
  accessTokenKey: string
  refreshTokenKey: string
  accessTokenExpiry: number
  refreshTokenExpiry: number
  tokenStorageType: TokenStorageType
  cookieSecure: boolean
  cookieSameSite: 'strict' | 'lax' | 'none'
}

class ApiClient {
  private instance: AxiosInstance
  private isRefreshing = false
  private config: ApiClientConfig
  private failedQueue: Array<{
    resolve: (value: any) => void
    reject: (error: any) => void
  }> = []

  constructor(config: ApiClientConfig) {
    this.config = config
    
    this.instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'OneOctane-Frontend/1.0.0',
      },
      withCredentials: true, // Enable cookies for authentication
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Add request ID for debugging
        if (config.headers && !config.headers['X-Request-ID']) {
          config.headers['X-Request-ID'] = this.generateRequestId()
        }
        
        // Add JWT token if available (fallback for non-cookie auth)
        const token = this.getAccessToken()
        if (token && config.headers && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`
        }
        
        return config
      },
      (error) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Track rate limit headers
        this.trackRateLimit(response)
        return response
      },
      async (error) => {
        const originalRequest = error.config
        
        // Handle 401 Unauthorized
        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject })
            }).then(token => {
              if (originalRequest.headers && token) {
                originalRequest.headers.Authorization = `Bearer ${token}`
              }
              return this.instance(originalRequest)
            }).catch(err => Promise.reject(err))
          }

          originalRequest._retry = true
          this.isRefreshing = true

          try {
            const newToken = await this.refreshAccessToken()
            this.processQueue(null, newToken)
            
            if (originalRequest.headers && newToken) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`
            }
            return this.instance(originalRequest)
          } catch (refreshError) {
            this.processQueue(refreshError, null)
            this.clearTokens()
            await navigateTo(this.config.loginRedirect)
            return Promise.reject(refreshError)
          } finally {
            this.isRefreshing = false
          }
        }

        // Handle 429 Rate Limit
        if (error.response?.status === 429) {
          const retryAfter = error.response.headers['retry-after'] || error.response.headers['x-ratelimit-reset']
          const delay = retryAfter ? parseInt(retryAfter) * 1000 : 60000 // Default 1 minute
          
          console.warn(`Rate limited. Retrying in ${delay}ms...`)
          await new Promise(resolve => setTimeout(resolve, delay))
          
          return this.instance(originalRequest)
        }

        return Promise.reject(error)
      }
    )
  }

  private processQueue(error: any, token: string | null): void {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })
    
    this.failedQueue = []
  }

  private getAccessToken(): string | null {
    if (this.config.tokenStorageType === 'localStorage') {
      if (import.meta.client) {
        return localStorage.getItem(this.config.accessTokenKey)
      }
      return null
    } else {
      return useCookie(this.config.accessTokenKey).value || null
    }
  }

  private getRefreshToken(): string | null {
    if (this.config.tokenStorageType === 'localStorage') {
      if (import.meta.client) {
        return localStorage.getItem(this.config.refreshTokenKey)
      }
      return null
    } else {
      return useCookie(this.config.refreshTokenKey).value || null
    }
  }

  private async refreshAccessToken(): Promise<string> {
    const refreshToken = this.getRefreshToken()
    
    if (!refreshToken) {
      throw new Error('No refresh token available')
    }

    try {
      const response = await axios.post<RefreshTokenResponse>(this.config.refreshEndpoint, {
        refreshToken
      })

      const { accessToken, refreshToken: newRefreshToken } = response.data
      
      this.setTokens({
        accessToken,
        refreshToken: newRefreshToken || refreshToken
      })

      return accessToken
    } catch (error) {
      this.clearTokens()
      throw error
    }
  }

  public setTokens({ accessToken, refreshToken }: AuthTokens): void {
    if (this.config.tokenStorageType === 'localStorage') {
      if (import.meta.client) {
        if (accessToken) {
          localStorage.setItem(this.config.accessTokenKey, accessToken)
        }
        if (refreshToken) {
          localStorage.setItem(this.config.refreshTokenKey, refreshToken)
        }
      }
    } else {
      if (accessToken) {
        useCookie(this.config.accessTokenKey, { 
          default: () => 'null',
          httpOnly: false,
          secure: this.config.cookieSecure,
          sameSite: this.config.cookieSameSite,
          maxAge: this.config.accessTokenExpiry
        }).value = accessToken
      }
      if (refreshToken) {
        useCookie(this.config.refreshTokenKey, { 
          default: () => 'null',
          httpOnly: false,
          secure: this.config.cookieSecure,
          sameSite: this.config.cookieSameSite,
          maxAge: this.config.refreshTokenExpiry
        }).value = refreshToken
      }
    }
  }

  public clearTokens(): void {
    if (this.config.tokenStorageType === 'localStorage') {
      if (import.meta.client) {
        localStorage.removeItem(this.config.accessTokenKey)
        localStorage.removeItem(this.config.refreshTokenKey)
      }
    } else {
      useCookie(this.config.accessTokenKey).value = null
      useCookie(this.config.refreshTokenKey).value = null
    }
  }

  public isAuthenticated(): boolean {
    return !!this.getAccessToken()
  }

  public async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.request<T>(config)
  }

  public async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, config)
  }

  public async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config)
  }

  public async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config)
  }

  public async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config)
  }

  public async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config)
  }

  // Utility methods
  private generateRequestId(): string {
    return Math.random().toString(36).substring(2, 9)
  }

  private trackRateLimit(response: AxiosResponse): void {
    const headers = response.headers
    const limit = headers['x-ratelimit-limit']
    const remaining = headers['x-ratelimit-remaining']
    const reset = headers['x-ratelimit-reset']

    if (limit && remaining && reset) {
      console.debug('Rate Limit Status:', {
        limit: parseInt(limit),
        remaining: parseInt(remaining),
        reset: new Date(parseInt(reset) * 1000),
        resetIn: parseInt(reset) - Math.floor(Date.now() / 1000)
      })
    }
  }

  // OneOctane API specific helpers
  public async checkSystemHealth(): Promise<any> {
    try {
      const response = await this.get('/health')
      return response.data
    } catch (error) {
      console.error('Health check failed:', error)
      throw error
    }
  }

  public async checkAuthStatus(): Promise<any> {
    try {
      const response = await this.get('/api/auth/google/status')
      return response.data
    } catch (error) {
      console.error('Auth status check failed:', error)
      return { success: false, data: { enabled: false } }
    }
  }

  public async getCurrentUser(): Promise<any> {
    try {
      const response = await this.get('/api/v1/users/me')
      return response.data
    } catch (error) {
      console.error('Get current user failed:', error)
      throw error
    }
  }

  // Brand management helpers
  public async createBrand(brandData: any): Promise<any> {
    try {
      const response = await this.post('/api/v1/brands', brandData)
      return response.data
    } catch (error) {
      console.error('Create brand failed:', error)
      throw error
    }
  }

  public async getBrands(filters: Record<string, any> = {}): Promise<any> {
    try {
      const params = new URLSearchParams(filters)
      const response = await this.get(`/api/v1/brands?${params.toString()}`)
      return response.data
    } catch (error) {
      console.error('Get brands failed:', error)
      throw error
    }
  }

  public async getBrand(brandId: string): Promise<any> {
    try {
      const response = await this.get(`/api/v1/brands/${brandId}`)
      return response.data
    } catch (error) {
      console.error('Get brand failed:', error)
      throw error
    }
  }

  public async updateBrand(brandId: string, updates: any): Promise<any> {
    try {
      const response = await this.put(`/api/v1/brands/${brandId}`, updates)
      return response.data
    } catch (error) {
      console.error('Update brand failed:', error)
      throw error
    }
  }

  public async deleteBrand(brandId: string): Promise<void> {
    try {
      await this.delete(`/api/v1/brands/${brandId}`)
    } catch (error) {
      console.error('Delete brand failed:', error)
      throw error
    }
  }

  // ICP management helpers
  public async createICP(icpData: any): Promise<any> {
    try {
      const response = await this.post('/api/v1/icps', icpData)
      return response.data
    } catch (error) {
      console.error('Create ICP failed:', error)
      throw error
    }
  }

  public async getICPs(filters: Record<string, any> = {}): Promise<any> {
    try {
      const params = new URLSearchParams(filters)
      const response = await this.get(`/api/v1/icps?${params.toString()}`)
      return response.data
    } catch (error) {
      console.error('Get ICPs failed:', error)
      throw error
    }
  }

  public async getICP(icpId: string): Promise<any> {
    try {
      const response = await this.get(`/api/v1/icps/${icpId}`)
      return response.data
    } catch (error) {
      console.error('Get ICP failed:', error)
      throw error
    }
  }

  // Brand-ICP association helpers
  public async associateBrandICP(brandId: string, icpId: string, options: any = {}): Promise<any> {
    try {
      const response = await this.post(`/api/v1/brands/${brandId}/icps/${icpId}`, options)
      return response.data
    } catch (error) {
      console.error('Associate Brand-ICP failed:', error)
      throw error
    }
  }

  public async removeBrandICP(brandId: string, icpId: string): Promise<void> {
    try {
      await this.delete(`/api/v1/brands/${brandId}/icps/${icpId}`)
    } catch (error) {
      console.error('Remove Brand-ICP association failed:', error)
      throw error
    }
  }
}

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  
  const apiConfig: ApiClientConfig = {
    baseURL: runtimeConfig.public.apiBaseUrl as string,
    timeout: runtimeConfig.public.apiTimeout as number,
    refreshEndpoint: runtimeConfig.public.refreshEndpoint as string,
    loginRedirect: runtimeConfig.public.loginRedirect as string,
    accessTokenKey: runtimeConfig.public.accessTokenKey as string,
    refreshTokenKey: runtimeConfig.public.refreshTokenKey as string,
    accessTokenExpiry: runtimeConfig.public.accessTokenExpiry as number,
    refreshTokenExpiry: runtimeConfig.public.refreshTokenExpiry as number,
    tokenStorageType: runtimeConfig.public.tokenStorageType as TokenStorageType,
    cookieSecure: runtimeConfig.public.cookieSecure as boolean,
    cookieSameSite: runtimeConfig.public.cookieSameSite as 'strict' | 'lax' | 'none'
  }
  
  const apiClient = new ApiClient(apiConfig)

  return {
    provide: {
      api: apiClient
    }
  }
})