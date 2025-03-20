import { ApiService } from './services/apiService';
import { validateEmail, validateMessage, validationConfig } from './utilities/validation';

async function validateForm(event: Event): Promise<boolean> {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const emailInput = form.querySelector('#emailInput') as HTMLInputElement;
  const messageInput = form.querySelector('#messageInput') as HTMLTextAreaElement;
  const emailError = form.querySelector('#emailError') as HTMLDivElement;
  const messageError = form.querySelector('#messageError') as HTMLDivElement;
  const status = form.querySelector('#formStatus') as HTMLDivElement;

  // Reset error messages and aria-describedby
  emailError.textContent = '';
  messageError.textContent = '';
  emailInput.removeAttribute('aria-describedby');
  messageInput.removeAttribute('aria-describedby');

  status.textContent = '';

  // Email format validation
  const emailErrorMsg = validateEmail(emailInput.value);
  if (emailErrorMsg) {
    emailError.textContent = emailErrorMsg;
    emailInput.setAttribute('aria-describedby', 'emailError');
    emailInput.focus();
    return false;
  }

  const messageErrorMsg = validateMessage(messageInput.value);
  if (messageErrorMsg) {
    messageError.textContent = messageErrorMsg;
    messageInput.setAttribute('aria-describedby', 'messageError');
    messageInput.focus();
    return false;
  }

  status.textContent = API_CONFIG.errorMessages.sending;
  status.className = 'text-emerald-400';

  try {
    const formData = new FormData(form);
    const result = await ApiService.postFormData('contact', formData);

    if (result.ok) {
      status.textContent = API_CONFIG.errorMessages.success;
      status.className = 'text-emerald-400';
      form.reset();
      setTimeout(() => status.textContent = '', 3000);
    } else {
      status.textContent = API_CONFIG.errorMessages.failure;
      status.className = 'text-red-400';
    }
  } catch (e: any) {
    console.error('Form submission error:', e);
    status.textContent = API_CONFIG.errorMessages.exception;
    status.className = 'text-red-400';
  }

  return false;
}

export default validateForm;