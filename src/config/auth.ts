// Authentication configuration
export const AUTH_CONFIG = {
  // Admin credentials should be moved to environment variables
  admin: {
    email: process.env.VITE_ADMIN_EMAIL || 'ADMIN_EMAIL_PLACEHOLDER',
    password: process.env.VITE_ADMIN_PASSWORD || 'ADMIN_PASSWORD_PLACEHOLDER'
  },
  // Demo credentials should be moved to environment variables
  demo: {
    email: process.env.VITE_DEMO_EMAIL || 'DEMO_EMAIL_PLACEHOLDER',
    password: process.env.VITE_DEMO_PASSWORD || 'DEMO_PASSWORD_PLACEHOLDER'
  }
}; 