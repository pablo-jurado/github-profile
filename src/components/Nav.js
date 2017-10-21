import React from 'react'
import { Link } from 'react-router'
import './Nav.css'

const getRandom = () => Math.round( (Math.random() * 10 ) + 1)

const Nav = () => (
  <nav>
    <Link to='/'>Home</Link>
    { '  ' }
    <Link to='/counter'>Counter</Link>
    { '  ' }
    <Link to={'/user/'+ getRandom()} >User</Link>
  </nav>
)

export default Nav
