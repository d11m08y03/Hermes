import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-md shadow-sm dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
