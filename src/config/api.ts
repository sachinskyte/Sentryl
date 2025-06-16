// API configuration
export const API_CONFIG = {
  // API endpoints should be moved to environment variables
  endpoints: {
    api: process.env.VITE_API_URL || 'API_URL_PLACEHOLDER',
    blockchain: process.env.VITE_BLOCKCHAIN_URL || 'BLOCKCHAIN_URL_PLACEHOLDER',
    external: process.env.VITE_EXTERNAL_SCRIPT_URL || 'EXTERNAL_SCRIPT_URL_PLACEHOLDER'
  }
}; 