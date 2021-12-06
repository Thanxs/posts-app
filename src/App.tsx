import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/UI/app-router/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { useToggleTheme } from './hooks/useToggleTheme';
import ThemeContext from './shared/themes/theme.context';

import './App.scss';

const App: FC = (): JSX.Element => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </ThemeContext.Provider> 
  )
}

export default App;