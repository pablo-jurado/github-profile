import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers'
import App from './components/App'

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
    <App />
  </Provider>,
  document.getElementById('root')
)
