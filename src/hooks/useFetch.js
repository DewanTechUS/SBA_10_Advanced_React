// Explanation of the code concepts used in this file:
// useEffect Hook
// Official React documentation
// https://react.dev/reference/react/useEffect
// Learn how to perform side effects in function components, such as data fetching.
// useState Hook
// Official React documentation
// https://react.dev/reference/react/useState
// Learn how to create and manage state in function components.
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err.message || "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
