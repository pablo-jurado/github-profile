import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import './Repos.css'

const Repos = ({repos}) => {
  if (!repos || repos.length === 0) return <div>No repos found</div>

  const reposArr = _.map(repos, (repo) => {
    return (
      <li key={repo.id}>
        <Link to={'repo/' + repo.id}><h4>{repo.name}</h4></Link>
        <hr />
      </li>
    )
  })

  return (
      <ul>
        {reposArr}
      </ul>
  )
}

const mapStateToProps = (state) => (
  { repos: state.allRepos }
)

export default connect(
  mapStateToProps,
  null
)(Repos)
