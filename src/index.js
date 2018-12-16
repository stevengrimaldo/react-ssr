import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

import App from './App';
import createStore from '../server/store';
import theme from './global/theme';
import './global';

// Create a store and get back itself and its history object
const { store, history } = createStore();

const root = document.getElementById('root');

const state = window !== 'undefined' ? window.__PRELOADED_STATE__ : {};

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App data={state} />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  hydrate(Application, root);
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
