import { useState, useEffect } from 'react';

// Global subscribers
let listeners: ((newPath: string) => void)[] = [];

// Current pathname
let currentPathname = window.location.pathname;

// Notify all subscribers
const notify = () => listeners.forEach(listener => listener(currentPathname));

export function usePathname() {
  const [pathname, setPathname] = useState(currentPathname);

  useEffect(() => {
    const listener = (newPath: string) => setPathname(newPath);
    listeners.push(listener);

    const handlePopState = () => {
      currentPathname = window.location.pathname;
      notify();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  // Function to update URL and notify all components
  const pushPath = (newPath: string) => {
    if (newPath !== currentPathname) {
      window.history.pushState(null, '', newPath);
      currentPathname = newPath;
      notify();
    }
  };

  return [pathname, pushPath] as const;
}
