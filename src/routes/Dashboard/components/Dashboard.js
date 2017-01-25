import React, { PropTypes, Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }
  static propTypes = {}
  render () {
    return (
      <div className="dashboard">
        <button onClick={() => this.props.fetchProject()}>
          Fetch
        </button>
        {this.props.project.isFetching === true
          ? <div>Loading...</div>
          : null }
      </div>
    )
  }
}
