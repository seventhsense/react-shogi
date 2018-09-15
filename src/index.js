import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import App from './App'
import json from './data.json'

const logger = store => next => action => {
  console.log(store.getState())
  next(action)
  console.log(store.getState())
}

// const store = createStore(reducer, json, applyMiddleware(logger))
const store = createStore(reducer, json)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
