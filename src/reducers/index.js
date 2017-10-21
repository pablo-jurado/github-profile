import { combineReducers } from 'redux'
import counterReducer from './counter_reducer'

const todoApp = combineReducers({
  counter: counterReducer
})

export default todoApp
