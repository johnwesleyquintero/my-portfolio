export const API_ENDPOINTS = {
  PROJECTS: '/api/projects',
  BLOG_POSTS: '/api/blog',
  CONTACT: '/api/contact',
  VALIDATION: '/api/validate'
} as const;

export const DEFAULT_TIMEOUT = 5000;

export const ERROR_MESSAGES = {
  TIMEOUT: 'Request timed out',
  NETWORK_ERROR: 'Network connection failed',
  SERVER_ERROR: 'Internal server error'
} as const;