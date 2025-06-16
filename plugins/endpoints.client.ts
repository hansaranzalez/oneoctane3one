import type { FetchError } from 'ofetch'

interface EndpointGroup {
  [key: string]: string | EndpointGroup
}

interface EndpointsResponse {
  endpoints: EndpointGroup
  version: string
  timestamp: string
}

interface EndpointConfig {
  baseUrl: string
  endpointsPath: string
  fallbackEndpoints: EndpointGroup
  cacheKey: string
  cacheTtl: number
  retryAttempts: number
  retryDelay: number
}

class EndpointsManager {
  private config: EndpointConfig
  private endpoints: EndpointGroup = {}
  private isLoaded = false
  private loadPromise: Promise<void> | null = null

  constructor(config: EndpointConfig) {
    this.config = config
    this.endpoints = { ...config.fallbackEndpoints }
  }

  async initialize(): Promise<void> {
    if (this.loadPromise) {
      return this.loadPromise
    }

    this.loadPromise = this.loadEndpoints()
    return this.loadPromise
  }

  private async loadEndpoints(): Promise<void> {
    // Try to load from cache first
    const cached = this.getCachedEndpoints()
    if (cached) {
      this.endpoints = { ...this.config.fallbackEndpoints, ...cached.endpoints }
      this.isLoaded = true
      
      // Refresh in background if cache is getting old
      if (this.isCacheExpiring(cached.timestamp)) {
        this.refreshEndpointsInBackground()
      }
      return
    }

    // Load from API with retry logic
    await this.fetchEndpointsWithRetry()
  }

  private async fetchEndpointsWithRetry(): Promise<void> {
    let lastError: Error | null = null

    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      try {
        await this.fetchEndpointsFromApi()
        return
      } catch (error) {
        lastError = error as Error
        
        if (attempt < this.config.retryAttempts) {
          const delay = this.config.retryDelay * Math.pow(2, attempt - 1) // Exponential backoff
          await new Promise(resolve => setTimeout(resolve, delay))
        }
      }
    }

    // If all retries failed, log error but continue with fallback endpoints
    console.warn('Failed to load endpoints from API after retries:', lastError?.message)
    this.isLoaded = true
  }

  private async fetchEndpointsFromApi(): Promise<void> {
    try {
      const response = await $fetch<EndpointsResponse>(this.config.endpointsPath, {
        baseURL: this.config.baseUrl,
        timeout: 5000,
        retry: 0 // We handle retries manually
      })

      if (response?.endpoints) {
        this.endpoints = { ...this.config.fallbackEndpoints, ...response.endpoints }
        this.cacheEndpoints(response)
        this.isLoaded = true
      } else {
        throw new Error('Invalid endpoints response format')
      }
    } catch (error) {
      const fetchError = error as FetchError
      throw new Error(`Failed to fetch endpoints: ${fetchError.message}`)
    }
  }

  private refreshEndpointsInBackground(): void {
    this.fetchEndpointsFromApi().catch(error => {
      console.warn('Background endpoints refresh failed:', error.message)
    })
  }

  private getCachedEndpoints(): EndpointsResponse | null {
    if (!import.meta.client) return null

    try {
      const cached = localStorage.getItem(this.config.cacheKey)
      if (!cached) return null

      const parsed = JSON.parse(cached) as EndpointsResponse & { cachedAt: number }
      
      // Check if cache is still valid
      const now = Date.now()
      const cacheAge = now - parsed.cachedAt
      
      if (cacheAge > this.config.cacheTtl) {
        localStorage.removeItem(this.config.cacheKey)
        return null
      }

      return parsed
    } catch (error) {
      console.warn('Failed to parse cached endpoints:', error)
      localStorage.removeItem(this.config.cacheKey)
      return null
    }
  }

  private cacheEndpoints(response: EndpointsResponse): void {
    if (!import.meta.client) return

    try {
      const cacheData = {
        ...response,
        cachedAt: Date.now()
      }
      
      localStorage.setItem(this.config.cacheKey, JSON.stringify(cacheData))
    } catch (error) {
      console.warn('Failed to cache endpoints:', error)
    }
  }

  private isCacheExpiring(timestamp: string): boolean {
    const cacheTime = new Date(timestamp).getTime()
    const now = Date.now()
    const halfTtl = this.config.cacheTtl / 2
    
    return (now - cacheTime) > halfTtl
  }

  // Public API
  public get(path: string): string {
    if (!this.isLoaded) {
      console.warn('Endpoints not loaded yet, using fallback for:', path)
    }

    const keys = path.split('.')
    let current: any = this.endpoints

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        throw new Error(`Endpoint not found: ${path}`)
      }
    }

    if (typeof current !== 'string') {
      throw new Error(`Endpoint path does not resolve to a URL: ${path}`)
    }

    return current
  }

  public getAll(): EndpointGroup {
    return { ...this.endpoints }
  }

  public has(path: string): boolean {
    try {
      this.get(path)
      return true
    } catch {
      return false
    }
  }

  public isReady(): boolean {
    return this.isLoaded
  }

  public async refresh(): Promise<void> {
    this.isLoaded = false
    this.loadPromise = null
    
    if (import.meta.client) {
      localStorage.removeItem(this.config.cacheKey)
    }
    
    await this.initialize()
  }

  // Helper method to build full URLs
  public url(path: string, params?: Record<string, string | number>): string {
    let endpoint = this.get(path)
    
    // Replace path parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        endpoint = endpoint.replace(`:${key}`, String(value))
        endpoint = endpoint.replace(`{${key}}`, String(value))
      })
    }
    
    return endpoint
  }
}

export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()
  
  const endpointConfig: EndpointConfig = {
    baseUrl: runtimeConfig.public.apiBaseUrl as string,
    endpointsPath: runtimeConfig.public.endpointsPath as string || '/api/endpoints',
    cacheKey: runtimeConfig.public.endpointsCacheKey as string || 'api_endpoints',
    cacheTtl: (runtimeConfig.public.endpointsCacheTtl as number) || 1000 * 60 * 15, // 15 minutes
    retryAttempts: (runtimeConfig.public.endpointsRetryAttempts as number) || 3,
    retryDelay: (runtimeConfig.public.endpointsRetryDelay as number) || 1000, // 1 second
    fallbackEndpoints: {
      // Authentication endpoints
      auth: {
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        refresh: '/api/auth/refresh',
        google: {
          connect: '/api/auth/google',
          callback: '/api/auth/google/callback',
          status: '/api/auth/google/status',
          link: '/api/auth/google/link',
          unlink: '/api/auth/google/unlink/:providerId',
          providers: '/api/auth/google/providers',
          sync: '/api/auth/google/sync/:providerId',
          refresh: '/api/auth/google/refresh/:providerId'
        }
      },
      
      // Versioned API endpoints (v1)
      v1: {
        brands: {
          base: '/api/v1/brands',
          single: '/api/v1/brands/:id',
          icps: '/api/v1/brands/:brandId/icps/:icpId',
          contentStrategy: '/api/v1/brands/:brandId/content-strategy',
          analytics: '/api/v1/brands/:brandId/analytics'
        },
        icps: {
          base: '/api/v1/icps',
          single: '/api/v1/icps/:id',
          analytics: '/api/v1/icps/:id/analytics'
        },
        users: {
          me: '/api/v1/users/me',
          profile: '/api/v1/users/me',
          single: '/api/v1/users/:id'
        }
      },
      
      // Legacy/unversioned endpoints
      legacy: {
        health: '/api/health',
        version: '/api/version',
        endpoints: '/api/endpoints'
      },
      
      // System endpoints
      system: {
        health: '/health',
        status: '/status',
        metrics: '/metrics'
      }
    }
  }

  const endpointsManager = new EndpointsManager(endpointConfig)
  
  // Initialize endpoints (non-blocking for better startup performance)
  if (import.meta.client) {
    endpointsManager.initialize().catch(error => {
      console.warn('Failed to initialize endpoints:', error.message)
    })
  }

  return {
    provide: {
      endpoints: endpointsManager
    }
  }
})