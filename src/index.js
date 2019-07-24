import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import rootSaga from './redux/sagas';

import App from './pages/app';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = window.store = createStore(
  reducers,
  compose(
  	applyMiddleware(sagaMiddleware),
  	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(rootSaga);

render(<App store={store} />, document.getElementById('root'));
