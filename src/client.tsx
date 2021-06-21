import * as React from 'react';
import { hydrate } from 'react-dom';
import 'babel-polyfill';
import {configureStore} from "./store/rootStore";
import {Provider} from "react-redux";
import {State} from "./store/types";
import App from "./app";
import {ConnectedRouter} from "connected-react-router";

const { store, history } = configureStore(window.__INITIAL_STATE__);

declare global {
  interface Window {
    __INITIAL_STATE__: State;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('mount')
);
