/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import 'firebase/auth';
import React from 'react';
import firebase from 'firebase/app';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './components/app/App';
import rootReducer from './config/rootReducer';
import rootSaga from './config/rootSaga';
import firebaseCredentials from './config/firebaseCredentials';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

firebase.initializeApp(firebaseCredentials);

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ auth: firebase.auth() }}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
