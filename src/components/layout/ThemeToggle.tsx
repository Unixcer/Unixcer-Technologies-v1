'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-transparent flex items-center justify-center opacity-50" />
    );
  }

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('system');
    }
  };

  const getLabel = () => {
    if (theme === 'dark') return 'Dark Mode (Click for Light)';
    if (theme === 'light') return 'Light Mode (Click for System)';
    return 'System Mode (Click for Dark)';
  };

  return (
    <button
      onClick={cycleTheme}
      type="button"
      title={getLabel()}
      aria-label={getLabel()}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200 shadow-sm"
    >
      {theme === 'dark' && <Moon className="w-4 h-4 text-blue-400 transition-transform rotate-0" />}
      {theme === 'light' && <Sun className="w-4 h-4 text-amber-500 transition-transform rotate-0" />}
      {theme === 'system' && <Laptop className="w-4 h-4 text-slate-500 dark:text-slate-400" />}
    </button>
  );
}

