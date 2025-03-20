// Validation Utilities Module
type ValidationConfig = {
  email: {
    regex: RegExp;
    messages: {
      invalid: string;
    };
  };
  message: {
    minLength: number;
    messages: {
      tooShort: string;
    };
  };
};

export const validationConfig: ValidationConfig = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    messages: {
      invalid: API_CONFIG.errorMessages.validation.email,
    },
  },
  message: {
    minLength: 10,
    messages: {
      tooShort: API_CONFIG.errorMessages.validation.message,
    },
  },
};

export function validateEmail(email: string): string | null {
  return validationConfig.email.regex.test(email)
    ? null
    : validationConfig.email.messages.invalid;
}

export function validateMessage(message: string): string | null {
  return message.trim().length >= validationConfig.message.minLength
    ? null
    : validationConfig.message.messages.tooShort;
}