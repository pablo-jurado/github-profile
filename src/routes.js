import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import User from './components/User'

import Counter from './containers/counter'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/user/:id' component={User} />
  </Route>
)
