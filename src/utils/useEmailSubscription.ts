import { useState } from 'react';

interface EmailSubscriptionResponse {
  success: boolean;
  message?: string;
  error?: string;
  section?: string;
  timestamp?: string;
}

interface UseEmailSubscriptionReturn {
  subscribe: (email: string, section: string, source?: string) => Promise<EmailSubscriptionResponse>;
  isLoading: boolean;
  error: string | null;
  success: string | null;
  reset: () => void;
}

export function useEmailSubscription(): UseEmailSubscriptionReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const subscribe = async (
    email: string, 
    section: string, 
    source: string = 'website'
  ): Promise<EmailSubscriptionResponse> => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          section,
          source,
        }),
      });

      const data: EmailSubscriptionResponse = await response.json();

      if (response.ok && data.success) {
        setSuccess(data.message || 'Subscription successful!');
        return data;
      } else {
        const errorMessage = data.error || 'Failed to subscribe';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }
    } catch (err) {
      const errorMessage = 'Network error. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    subscribe,
    isLoading,
    error,
    success,
    reset,
  };
}
