import { useCallback, useState } from 'react';
type useLoading = () => Promise<void>;

export default function useLoading(callback: useLoading) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loading = useCallback(async () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { isLoading, loading, error };
}
