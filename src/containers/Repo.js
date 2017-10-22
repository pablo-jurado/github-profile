import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Repo = ({repo}) => {
  if (!repo) return <div>No data found</div>
  console.log(repo)
  return (
    <div>
      <Link className='btn-back' to='/user'>Back</Link>
      <div className='repo'>
        <p>Title: {repo.name} </p>
        <p>description {repo.description} </p>

        <p>Link {repo.url} </p>
        <p>created_at {repo.created_at} </p>
        <p>language {repo.language} </p>

        <p>watchers {repo.watchers} </p>
        <p>stargazers_count {repo.stargazers_count} </p>
        <p>forks {repo.forks} </p>

      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id
  return { repo: state.allRepos[id] }
}


export default connect(
  mapStateToProps,
  null
)(Repo)
