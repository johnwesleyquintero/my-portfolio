// API Service Module
import { API_CONFIG } from '../config/api';

export class ApiService {
  static async postFormData(endpoint: keyof typeof API_CONFIG.endpoints, data: FormData): Promise<any> {
    try {
      const response = await fetch(API_CONFIG.endpoints[endpoint], {
        method: 'POST',
        body: data,
        signal: AbortSignal.timeout(API_CONFIG.defaults.timeout)
      });

      if (!response.ok) {
        throw new Error(API_CONFIG.errorMessages.default);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  }
}