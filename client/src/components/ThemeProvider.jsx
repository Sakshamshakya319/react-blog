import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply light theme to document
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    
    // Set CSS custom properties for light theme
    document.documentElement.style.setProperty('--bg-primary', '#ffffff');
    document.documentElement.style.setProperty('--text-primary', '#000000');
    document.documentElement.style.setProperty('--bg-secondary', '#f8f9fa');
    document.documentElement.style.setProperty('--text-secondary', '#374151');
    document.documentElement.style.setProperty('--border-color', '#e5e7eb');
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider; 