import React from 'react'
import Counter from '../containers/counter'
import { Link } from 'react-router'

const App = (props) => (
  <div>
    <div>
      <Link to='/'>Counter</Link>
      { '  ' }
      <Link to='/home'>Home</Link>
    </div>
    {props.children}
    <div>footer</div>
  </div>
)

export default App
