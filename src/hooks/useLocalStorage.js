// Custom hook to manage state synchronized with localStorage
// useState Hook
// Official React documentation
// https://react.dev/reference/react/useState
// Learn how to create and manage state in function components.
// useEffect Hook
// Official React documentation
// https://react.dev/reference/react/useEffect
// Learn how to perform side effects in function components, such as interacting with localStorage.


import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      
    }
  }, [key, value]);

  return [value, setValue];
}
