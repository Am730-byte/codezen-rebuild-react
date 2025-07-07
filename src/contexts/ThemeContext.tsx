
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Apply Squid Game themed colors
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      // Dark theme with Squid Game colors - deep blacks with pink/red accents
      root.style.setProperty('--bg-primary', '0 0% 2%');
      root.style.setProperty('--bg-secondary', '0 0% 5%');
      root.style.setProperty('--text-primary', '0 0% 98%');
      root.style.setProperty('--accent-color', '340 100% 65%'); // Hot pink
      root.style.setProperty('--gradient-from', '340 100% 15%');
      root.style.setProperty('--gradient-to', '0 100% 10%');
      root.style.setProperty('--squid-green', '120 100% 40%');
      root.style.setProperty('--squid-red', '0 100% 60%');
    } else {
      root.classList.remove('dark');
      // Light theme with Squid Game pastels
      root.style.setProperty('--bg-primary', '340 50% 98%');
      root.style.setProperty('--bg-secondary', '340 30% 95%');
      root.style.setProperty('--text-primary', '0 0% 10%');
      root.style.setProperty('--accent-color', '340 80% 50%');
      root.style.setProperty('--gradient-from', '340 60% 90%');
      root.style.setProperty('--gradient-to', '0 60% 95%');
      root.style.setProperty('--squid-green', '120 80% 45%');
      root.style.setProperty('--squid-red', '0 80% 55%');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
