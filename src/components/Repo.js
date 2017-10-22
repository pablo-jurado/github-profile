import React from 'react'
import { connect } from 'react-redux'

const Repo = (props) => {
  console.log(props)
  return (
    <div>
      single repo
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.params.id)
  return { repo: state.repos }
}


export default connect(
  mapStateToProps,
  null
)(Repo)
