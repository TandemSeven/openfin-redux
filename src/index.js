import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';

// Entry
import { App } from './App';

// Redux
import { configureStore } from './utils';
import { sharedActions } from "./reduxs/sharedActions";
import { ClientCtxProvider } from './providers';

// TODO: read from .env file
const REACT_APP_FIN_UUID = 'openfin-redux-7nlagp8hi9';

// Initialize
InitializeReactOpenfin({
  fin: window.fin,
  finUuid: REACT_APP_FIN_UUID,
  hist: createBrowserHistory(),
  sharedActions,
});

// Store setup.
if(window.name === REACT_APP_FIN_UUID){
  window.store = configureStore();
} else {
  window.store = configureStore(window.opener.store.getState());
}

ReactDOM.render(
  <ReactOpenfin>
    <Provider store={window.store}>
      <ClientCtxProvider>
        <App />
      </ClientCtxProvider>
    </Provider>
  </ReactOpenfin>,
  document.getElementById('root')
);
