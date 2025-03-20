import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', { email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full p-3 rounded bg-[var(--bg-secondary)]"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        className="w-full p-3 rounded bg-[var(--bg-secondary)]"
        rows={4}
        required
      />
      <button type="submit" className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;