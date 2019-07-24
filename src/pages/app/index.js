import React from 'react';
import { Provider } from 'react-redux';

import Main from '../main';
import TopBar from '../../components/top-bar';

import './index.scss';

const App = ({ store }) => (
  <Provider store={store}>
    <a className="skip-main" href="#Main">Skip to main content</a>
    <header>
      <TopBar />
    </header>
    <Main />
  </Provider>
);

export default App;
