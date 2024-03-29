import { FC } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';
import { environment } from '../../environments/environment';

const NotFound : FC = (): JSX.Element => {
  return (
    <div className="error-page">
      <div className="error-page__emoji">404 - Page not found<span>&#129324;</span></div>
      <Link
        className="error-page__link"
        to={environment.startEndpoint + '/posts'}
      >
        Go to posts
      </Link>  
    </div>
  )
}

export default NotFound;