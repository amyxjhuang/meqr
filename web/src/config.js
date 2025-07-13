// Configuration for different environments
const config = {
  development: {
    backendUrl: 'http://127.0.0.1:5001'
  },
  production: {
    backendUrl: 'https://meqr-7md6u2wlj-amy-huangs-projects-acc0015b.vercel.app'
  }
}

// Get current environment
const isDevelopment = import.meta.env.DEV || window.location.hostname === '127.0.0.1'

// Export the appropriate config
export const backendUrl = isDevelopment ? config.development.backendUrl : config.production.backendUrl 