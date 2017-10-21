import React from 'react'
import { Link } from 'react-router'
import './Nav.css'

const Nav = () => (
  <nav>
    <Link to='/'>Home</Link>
    { '  ' }
    <Link to='/counter'>Counter</Link>
  </nav>
)

export default Nav
