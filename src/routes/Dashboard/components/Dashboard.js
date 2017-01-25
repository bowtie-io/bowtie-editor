import React, { PropTypes, Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files : [],
      dirs  : []

    }
  }
  componentWillMount() {
    this.props.fetchProject()
  }
  renderFileItem = (item) => {
      return (
        <div>
          <a href={item.download_url}>
          {item.name} - FILE
          </a>
        </div>
      )
  }
  renderDirItem = (item) => {
      return (
        <div>
          <a href={item._links.git}>
             {item.name} - DIR
           </a>
         </div> 
      )
  }
  renderItem = (item) => {
    if (item.type === "file") {
      return this.renderFileItem(item)
    } else {
      return this.renderDirItem(item)
    }
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
