import React from 'react'
import { Link } from 'react-router'
import imgSrc from './img/notfound.gif'

const UserNotFound = () => {
  return (
    <div>
      <Link to='/'>Back</Link>
      <div className='avatar'>
        <h2>User Not Found</h2>
        <img src={imgSrc} alt='github user' />
      </div>
    </div>
  )
}

export default UserNotFound
