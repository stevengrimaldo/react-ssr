import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'emotion-theming';
import { createBrowserHistory } from 'history';

import App from './App';
import configureStore from './store';
import theme from './global/theme';
import sig from './global/sig';

process.env.NODE_ENV === 'production' && console.log(sig);

// Create a store and get back itself and its history object
const initialState =
  typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);
const root = document.getElementById('root');

// Running locally, we should run on a <ConnectedRouter /> rather than on a
// <StaticRouter /> like on the server
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App data={initialState} />
      </ThemeProvider>
    </ConnectedRouter>
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
