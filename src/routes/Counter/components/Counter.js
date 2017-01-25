import React, { Component } from 'react'
import { Header } from '~/components'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Counter: {this.props.counter}</h2>
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
        {' '}
        <Header />
      </div>
    )
  }
}



Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

