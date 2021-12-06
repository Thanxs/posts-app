import { createContext } from "react"

export interface Theme {
  [key: string]: {
    background: string,
    color: string;
  };
}

export const themes: Theme = {
  dark: {
    background: '#12181b',
    color: '#ffffff'
  },
  light: {
    background: '#ffffff',
    color: '#12181b'
  }
}

export const toggleTheme = () => {};

export const ThemeContext = createContext({ theme: themes.dark, toggleTheme });

export default ThemeContext;