import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Repos from './components/Repos'
import Repo from './components/Repo'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Repos} />
    <Route path='/repo/:id' component={Repo} />
  </Route>
)
