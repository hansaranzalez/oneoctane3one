// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/image'],
  
  
  // CSS Configuration
  css: ['~/assets/css/main.css'],
  
  // Icon Configuration
  icon: {
    collections: ['lucide', 'heroicons', 'tabler']
  },
  
  runtimeConfig: {
    // Private keys (only available on server-side)
    jwtSecret: process.env.JWT_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    
    // Public keys (exposed to client-side)
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '/api',
      apiTimeout: parseInt(process.env.NUXT_PUBLIC_API_TIMEOUT || '10000'),
      tokenStorageType: process.env.NUXT_PUBLIC_TOKEN_STORAGE_TYPE || 'localStorage', // 'localStorage' | 'cookie'
      cookieSecure: process.env.NODE_ENV === 'production',
      cookieSameSite: process.env.NUXT_PUBLIC_COOKIE_SAME_SITE || 'strict',
      refreshEndpoint: process.env.NUXT_PUBLIC_REFRESH_ENDPOINT || '/api/auth/refresh',
      loginRedirect: process.env.NUXT_PUBLIC_LOGIN_REDIRECT || '/auth/login',
      accessTokenKey: process.env.NUXT_PUBLIC_ACCESS_TOKEN_KEY || 'accessToken',
      refreshTokenKey: process.env.NUXT_PUBLIC_REFRESH_TOKEN_KEY || 'refreshToken',
      accessTokenExpiry: parseInt(process.env.NUXT_PUBLIC_ACCESS_TOKEN_EXPIRY || '900'), // 15 minutes in seconds
      refreshTokenExpiry: parseInt(process.env.NUXT_PUBLIC_REFRESH_TOKEN_EXPIRY || '2592000'), // 30 days in seconds
      endpointsPath: process.env.NUXT_PUBLIC_ENDPOINTS_PATH || '/api/endpoints',
      endpointsCacheKey: process.env.NUXT_PUBLIC_ENDPOINTS_CACHE_KEY || 'api_endpoints',
      endpointsCacheTtl: parseInt(process.env.NUXT_PUBLIC_ENDPOINTS_CACHE_TTL || '900000'), // 15 minutes in ms
      endpointsRetryAttempts: parseInt(process.env.NUXT_PUBLIC_ENDPOINTS_RETRY_ATTEMPTS || '3'),
      endpointsRetryDelay: parseInt(process.env.NUXT_PUBLIC_ENDPOINTS_RETRY_DELAY || '1000'), // 1 second in ms
    }
  }
})