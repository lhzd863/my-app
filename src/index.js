import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import ZDWST_STATE_VERSION_TYPE from './redux/types/ZdwstStateVersionType.js';
//import {createStore,applyMiddleware,compose} from 'redux'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import thunk from 'redux-thunk'
//import {logger} from 'redux-logger'
import {finalReducer} from './redux/reducers/finalReducer.js';
import './config.js';
//import "./common/styles/antd-mobile.min.css";

const loadState = () => {
  try { // 也可以容错一下不支持localStorage的情况下，用其他本地存储
    const serializedState = localStorage.getItem('zdwst-state');
    if (serializedState === null) {
      return undefined;
    } else {
      let state1 = JSON.parse(serializedState);
      if (state1.version < global.constants.const_state_version) {
        return undefined;
      } else {
        return state1;
      }
    }
  } catch (err) {
    // ... 错误处理
        return undefined;
  }
};

//var devTools=window.devToolsExtension?window.devToolsExtension():null
var store;
//if(window.devToolsExtension){
//    store = createStore(finalReducer,compose(
 //       applyMiddleware(thunk,logger),
 //       devTools
//    ))
//}else{
//    store = createStore(finalReducer,compose(
//        applyMiddleware(thunk,logger)
//    ))
//}
store = createStore(finalReducer, loadState());
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('zdwst-state', serializedState);
  } catch (err) {
    // ...错误处理
  }
};

window.onbeforeunload = (e) => {
  store.dispatch({
    type: ZDWST_STATE_VERSION_TYPE,
    payload: global.constants.const_state_version  // 代码全局变量，随工程配置一起处理即可。每次涉及需要更新state的时候，必须更新此版本号。
  });
  const state = store.getState();
  saveState(state);
};

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('root'));

