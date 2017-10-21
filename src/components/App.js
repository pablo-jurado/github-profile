import React from 'react'
import Counter from '../containers/counter'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'
import './App.css'


const App = (props) => (
  <div className='app'>
    <Nav />
    <div className='content'>
    {props.children}
    </div>
    <Footer />
  </div>
)

export default App
