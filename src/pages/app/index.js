import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../main';
import TopBar from '../../components/top-bar';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <TopBar />
        </header>
        <Route exact path="/" component={Main} />
      </Router>
    </Provider>
  );
};

export default App;