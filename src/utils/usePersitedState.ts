import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {

  const [value, setValue] = useState(() => {

    if (typeof window !== 'undefined') {
        const storageValue = localStorage.getItem(key);

        return JSON.parse(storageValue);
    } else {
        return initialState;
    }
    });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default usePersistedState;