import { Component } from 'react';

import './Home.scss';

class HomeComponent extends Component {
  render(): JSX.Element {
    return (
      <div className="home">
        <h1 className={'home__title'}>welcome to post app</h1>
      </div>
    )
  }
}

export default HomeComponent;