// Configuration for different environments
const config = {
  development: {
    backendUrl: 'http://127.0.0.1:5001/'
  },
  production: {
    // Replace this with your actual deployed backend URL
    backendUrl: 'https://your-backend-url.railway.app' // or .render.com
  }
}

// Get current environment
const isDevelopment = import.meta.env.DEV || window.location.hostname === '127.0.0.1'

// Export the appropriate config
export const backendUrl = isDevelopment ? config.development.backendUrl : config.production.backendUrl 