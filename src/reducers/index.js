import { combineReducers } from 'redux'
import reposReducer from './repos_reducer'
import profileReducer from './profile_reducer'

const reducers = combineReducers({
  allRepos: reposReducer,
  profile: profileReducer
})

export default reducers
