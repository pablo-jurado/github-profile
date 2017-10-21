import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import './index.css'


import appReducer from './reducers'
import App from './components/App'
import routes from './routes'

function configureStore(state){
  return createStore(
    appReducer,
    state,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

const initialState = {}

let store = configureStore(initialState)


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
