import { useState } from 'react';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const submitContactForm = async (formData: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Call Next.js API route to send email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSuccess('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      
      // Reset form after successful submission
      return true;
    } catch (err: unknown) {
      console.error('Error sending contact form:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again later.';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    submitContactForm,
    isLoading,
    error,
    success,
    reset
  };
};
