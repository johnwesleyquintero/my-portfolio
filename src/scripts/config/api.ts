// API Configuration Module
export const API_CONFIG = {
  endpoints: {
    contact: '/api/contact'
  },
  defaults: {
    timeout: 10000
  },
  errorMessages: {
    default: 'An unexpected error occurred',
    timeout: 'Request timed out',
    validation: {
      email: 'Please enter a valid email address',
      message: 'Message must be at least 10 characters'
    }
  }
} as const;

export type ApiConfig = typeof API_CONFIG;