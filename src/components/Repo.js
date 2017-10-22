import React from 'react'
import { connect } from 'react-redux'

const Repo = ({repo}) => {
  if (!repo) return <div>No data found</div>
  return (
    <div>
      Title: {repo.name}
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
