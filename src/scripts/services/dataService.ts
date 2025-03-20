import { API_ENDPOINTS, DEFAULT_TIMEOUT, ERROR_MESSAGES } from '../config/apiEndpoints';

export class DataService {
  static async fetchProjects() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

      const response = await fetch(API_ENDPOINTS.PROJECTS, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.SERVER_ERROR);
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error(ERROR_MESSAGES.TIMEOUT);
      }
      throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
    }
  }

  static async fetchBlogPosts() {
    // Similar implementation for blog posts
  }
}