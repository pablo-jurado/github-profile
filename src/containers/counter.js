import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <div>counter value: {counter}</div>
      <button onClick={increment} >+</button>
      <button onClick={decrement} >-</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch)
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
