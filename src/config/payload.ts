// Payload CMS Configuration
export const PAYLOAD_CONFIG = {
  // Use environment variable for API URL, fallback to production URL
  API_URL: process.env.NEXT_PUBLIC_PAYLOAD_API_URL || process.env.PAYLOAD_API_URL || 'https://payload-cms-sandy.vercel.app/api',
  
  // Google Cloud Storage configuration
  GCS_BUCKET: process.env.GOOGLE_CLOUD_BUCKET || 'amtop-cloud-storage',
  GCS_BASE_URL: process.env.GOOGLE_CLOUD_BASE_URL || `https://storage.googleapis.com/${process.env.GOOGLE_CLOUD_BUCKET || 'amtop-cloud-storage'}`,
  
  // Default settings
  DEFAULT_LIMIT: 10,
  DEFAULT_PAGE: 1,
  
  // API endpoints
  ENDPOINTS: {
    POSTS: '/posts',
    CATEGORIES: '/categories',
    TAGS: '/tags',
    AUTHORS: '/authors',
    MEDIA: '/media'
  }
};

// Helper function to build API URLs
export const buildApiUrl = (endpoint: string, params?: Record<string, string>) => {
  const url = new URL(`${PAYLOAD_CONFIG.API_URL}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  
  return url.toString();
};
