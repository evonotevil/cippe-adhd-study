import { useState, useEffect, useRef } from 'react';
import { queueWrite, readStoredValue } from '../utils/persistentStorage';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => readStoredValue(key, initialValue));
  const hasHydrated = useRef(false);

  useEffect(() => {
    // The first render already reflects what is in storage, so re-serializing it
    // on mount is pure startup cost. Only real changes are written back.
    if (!hasHydrated.current) {
      hasHydrated.current = true;
      return;
    }

    queueWrite(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
