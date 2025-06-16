# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run generate` - Generate static site
- `npm install` - Install dependencies

## Architecture

This is a Nuxt 3 application with TypeScript support using:

- **Framework**: Nuxt 3 with Vue 3
- **UI Components**: Nuxt UI (built on Tailwind CSS)
- **Authentication**: Google OAuth as primary authentication method with JWT tokens
- **HTTP Client**: Axios with automatic JWT handling and token refresh
- **Additional Modules**: 
  - @nuxt/icon for icons
  - @nuxt/image for optimized images
- **Type System**: TypeScript with strict configuration

### Authentication System
- **Primary Method**: Google OAuth with automatic user registration
- **Token Management**: JWT-based with automatic refresh via axios interceptors
- **Security Features**: Rate limiting, CSRF protection, audit logging
- **Storage Options**: Configurable localStorage or secure cookies
- **Default Role**: CREATOR for Google OAuth users

### API Client Usage
Access the configured axios client via `$api` in components:
```typescript
const { $api } = useNuxtApp()

// Automatically includes JWT tokens in headers
const response = await $api.get('/api/users/profile')
```

### Authentication Endpoints
- `POST /api/auth/login` - Primary login (initiates Google OAuth)
- `GET /api/auth/google` - Initiate Google OAuth flow
- `GET /api/auth/google/callback` - Handle OAuth callback
- `POST /api/auth/google/link` - Link Google account to existing user
- `DELETE /api/auth/google/unlink/:providerId` - Unlink Google account

### Project Structure
- `app.vue` - Root application component using UApp wrapper
- `pages/` - File-based routing (currently empty, using default Nuxt page)
- `components/` - Vue components (currently empty)
- `composables/` - Vue composables for shared logic (currently empty) 
- `services/` - API and external service integrations (currently empty)
- `server/` - Server-side API routes and middleware
- `public/` - Static assets
- `plugins/axios.client.ts` - Configured axios client with JWT authentication

The app uses Nuxt UI's UApp component as the root wrapper, which provides consistent styling and layout structure.