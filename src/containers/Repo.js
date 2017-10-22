import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Repo.css'

const Repo = ({repo}) => {
  if (!repo) return <div>No data found</div>
  const date = new Date(repo.created_at).toDateString()
  return (
    <div>
      <Link className='btn-back' to='/user'>Back</Link>
      <div className='repo'>
        <p>Title: {repo.name} </p>
        <p>Description: {repo.description} </p>

        <a href={repo.url} target='_blank' rel='noopener noreferrer'>{repo.url}</a>
        <p>Created: {date} </p>
        <p>Language: {repo.language} </p>

        <div className='repo-icons'>
          <div><i className="fa fa-eye" aria-hidden="true"></i> {repo.watchers} </div>
          <div><i className="fa fa-star-o" aria-hidden="true"></i> {repo.stargazers_count} </div>
          <div><i className="fa fa-code-fork" aria-hidden="true"></i> {repo.forks} </div>
        </div>

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
