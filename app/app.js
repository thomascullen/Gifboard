import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk'

import appReducers from './reducers'
import App from './components/App'

require('./stylesheets/main.scss');

const store = createStore(
  appReducers,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
