import React from 'react'
import { connect } from 'react-redux'
import './Profile.css'
const Profile = ({ profile }) => {
  if (!profile.name) return <div>No User Found</div>

  return (
    <div className='avatar'>
      <h1>{ profile.name }</h1>
      <img src={profile.avatar_url} alt='github user' />
      <span>{ profile.bio }</span>
      <span><a href={profile.html_url} target='_blank' rel='noopener noreferrer'>GitHub profile</a></span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { profile: state.profile }
}


export default connect(
  mapStateToProps,
  null
)(Profile)
