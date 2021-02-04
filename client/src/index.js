import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
