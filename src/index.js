import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const initialState = {
  username : ["prakash", "shrestha"]
}

function reducer(state = initialState, action){
  return state;
}

const store = createStore(reducer);
store.dispatch({ type: "CREATE"});
// store.dispatch({ type: "READ"});
// store.dispatch({ type: "UPDATE"});
// store.dispatch({ type: "DELETE"});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);