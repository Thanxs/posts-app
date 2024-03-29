import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from '../../../shared/themes/theme.context';
import { themes } from '../../../shared/themes/theme.context';
import { environment } from '../../../environments/environment';

import './Navbar.scss';

const Navbar: FC = (): JSX.Element => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const themeIcon = theme === themes.dark ? 'moon' : 'sun';

  return (
    <nav className="navbar">
      <div className="navbar__links">
      <Link className="navbar__link" to={environment.startEndpoint}>Home</Link>
        <Link className="navbar__link" to={environment.startEndpoint + '/about'}>About</Link>
        <Link className="navbar__link" to={environment.startEndpoint + '/posts'}>Posts</Link>
        <Link className="navbar__link" to={environment.startEndpoint + '/lazy'}>Lazy</Link>
      </div>
      <i className={`fas navbar__toogle ${themeIcon}`} onClick={toggleTheme}></i>
    </nav>
  )
}

export default Navbar;