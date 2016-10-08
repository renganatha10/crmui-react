import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {persistStore, autoRehydrate} from 'redux-persist'

import reducer from './../src/redux/reducer';

const store = createStore(combineReducers({reducer}),autoRehydrate())

persistStore(store,{},() =>{
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
