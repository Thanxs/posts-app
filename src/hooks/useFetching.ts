import { useState } from "react"

export const useFetching = (callback: () => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching: () => Promise<void> = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, error];
}