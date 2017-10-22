export const GET_REPOS = 'GET_REPOS'
export const GET_PROFILE = 'GET_PROFILE'

export const getRepos = (repos) => {
  return {
    type: GET_REPOS,
    payload: repos
  }
}

export const getProfile = (data) => {
  return {
    type: GET_PROFILE,
    payload: data
  }
}
