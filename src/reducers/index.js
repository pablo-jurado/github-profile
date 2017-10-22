import { combineReducers } from 'redux'
import reposReducer from './repos_reducer'

const reducers = combineReducers({
  allRepos: reposReducer
})

export default reducers
