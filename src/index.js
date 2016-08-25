import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Routers from './routers';
const store = configureStore();

/* 66 */
ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>
  , document.getElementById('root'));

/**

 **/