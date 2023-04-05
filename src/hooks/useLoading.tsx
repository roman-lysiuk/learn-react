import { useState } from 'react';
type useLoading = () => Promise<void>;

export default function useLoading(callback: useLoading) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  async function loading() {
    try {
      setError('');
      setIsLoading(() => true);
      await callback();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(() => false);
    }
  }
  return { isLoading, loading, error };
}
