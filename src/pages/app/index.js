import React from 'react';
import { Provider } from 'react-redux';

import Main from '../main';
import TopBar from '../../components/top-bar';

const App = ({ store }) => (
  <Provider store={store}>
    <header>
      <TopBar />
    </header>
    <Main />
  </Provider>
);

export default App;
