import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import './index.css';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const alternativeCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = alternativeCompose( applyMiddleware(thunk, logger) );
const store = createStore( rootReducer, composedEnhancers );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);
