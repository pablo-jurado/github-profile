import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'
import './App.css'
import Search from '../containers/Search'

const App = (props) => (
  <div className='app'>
    <Nav />
    <Search />
    <div className='content'>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default App
