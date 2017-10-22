import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Repo from './containers/Repo'
import Search from './containers/Search'
import User from './components/User'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Search} />
    <Route path='/user' component={User} />
    <Route path='/repo/:id' component={Repo} />
  </Route>
)
