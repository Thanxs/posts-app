import { useEffect, useState } from 'react';
import { themes } from '../shared/themes/theme.context';

export const useToggleTheme = () => {
  const [theme, setTheme] = useState(themes.dark);

  const setThemeToStorage = (theme: string): void =>  {
    setTheme(themes[theme]);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
      ? setThemeToStorage('dark')
      : setThemeToStorage('light');
  }, []);

  const toggleTheme = (): void => 
    theme === themes.dark
      ? setThemeToStorage('light')
      : setThemeToStorage('dark');
  
  return { theme, toggleTheme };
}