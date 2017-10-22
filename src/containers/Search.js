import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRepos, getProfile } from '../actions'
import axios from 'axios'
import _ from 'lodash'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = { text: '' }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput (event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const name = this.state.text
    if (name.trim() !== '') {
      const API_KEY = process.env.REACT_APP_SECRET_KEY
      const API_URL = 'https://api.github.com/users/'
      const FULL_REPOS_API = API_URL + name + '/repos' + API_KEY

      axios.get(FULL_REPOS_API)
        .then((response) => {
          const dataObj = _.keyBy(response.data, 'id')
          this.props.getRepos(dataObj)
        })

      const FULL_PROFILE_API = API_URL + name + API_KEY
      axios.get(FULL_PROFILE_API)
      .then((response) => {
        this.props.getProfile(response.data)
      })
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='input user name'
          value={this.state.text}
          onChange={this.handleInput}
        />
        <input value='Search' type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getRepos: bindActionCreators(getRepos, dispatch),
    getProfile: bindActionCreators(getProfile, dispatch)
  }
)

export default connect(
  null,
  mapDispatchToProps
)(Search)

