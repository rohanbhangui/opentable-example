import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Catalog from '../main/main';
import TopBar from '../../components/top-bar';

export default App = (store) => ({
  return (
    <Provider store={store}>
      <Router>
        <header>
          <TopBar />
        </header>
        <Route exact path="/" component={Catalog} />
      </Router>
    </Provider>
  );
});
