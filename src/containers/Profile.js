import React from 'react'
import { connect } from 'react-redux'
import './Profile.css'
const Profile = ({ profile }) => {
  if (!profile.name) return <div>No User Found</div>
  return (
    <div className='avatar'>
      <h2>{ profile.name }</h2>
      <div><a href={ profile.html_url } target='_blank' rel='noopener noreferrer'>GitHub profile</a></div>

      <img src={ profile.avatar_url } alt='github user' />
      <div>
        <strong>{ profile.login }</strong><span>
        &nbsp;-&nbsp;
        <a href={ profile.blog } target='_blank' rel='noopener noreferrer'>{ profile.blog }</a></span>
      </div>

      <div>{ profile.bio }</div>
      <div>{ profile.company }</div>
      <div>{ profile.location }</div>

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
