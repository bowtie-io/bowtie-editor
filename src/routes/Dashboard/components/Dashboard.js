import React, { PropTypes, Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    console.log(this.props)
  }
  renderItem = (item) => {
    return (
      <div>{item.name}</div>
    )
    
  }
  render () {
    return (
      <div className="dashboard">
        <button onClick={() => this.props.fetchProject()}>
          Fetch
        </button>
        {this.props.project.isFetching === true
          ? <div>Loading...</div>
          : null }

          {this.props.project.tree.map((item) => this.renderItem(item))}
      </div>
    )
  }
}
