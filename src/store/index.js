import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// A nice helper to tell us if we're on the server
const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default function configureStore(state, history) {
  const middleware = [thunk, routerMiddleware(history)];
  const enhancers = !isServer
    ? window.__PRELOADED_STATE__
    : compose(applyMiddleware(...middleware));
  const reducers = rootReducer(history);

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  // Create the store
  return createStore(reducers, state, enhancers);
}
