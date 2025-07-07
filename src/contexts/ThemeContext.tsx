
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
    // Apply theme to document with enhanced color shifts
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('--bg-primary', '0 0% 4%');
      root.style.setProperty('--bg-secondary', '240 5% 8%');
      root.style.setProperty('--text-primary', '0 0% 98%');
      root.style.setProperty('--accent-color', '330 81% 60%');
      root.style.setProperty('--gradient-from', '300 100% 20%');
      root.style.setProperty('--gradient-to', '270 100% 15%');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-primary', '0 0% 98%');
      root.style.setProperty('--bg-secondary', '240 5% 96%');
      root.style.setProperty('--text-primary', '240 10% 4%');
      root.style.setProperty('--accent-color', '330 81% 50%');
      root.style.setProperty('--gradient-from', '300 70% 85%');
      root.style.setProperty('--gradient-to', '270 70% 90%');
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
