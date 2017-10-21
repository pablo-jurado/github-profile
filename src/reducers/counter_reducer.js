import { INC, DEC } from '../actions'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC:
      return state + action.payload
    case DEC:
      return state - action.payload
    default:
      return state
  }
}

export default counterReducer
