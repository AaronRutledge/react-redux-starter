import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './containers/App'

const store = configureStore();
const rootElement = document.getElementById('app');
// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
