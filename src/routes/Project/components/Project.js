import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Project extends Component {
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
        <Link to={{pathname: `/project/file/${item.name}`, query: {link: 'https://google.com'}}}>
          {item.name} - FILE
          </Link>
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
      <div className="project">
        <button onClick={() => this.props.fetchProject()}>
          Fetch
        </button>
        {this.props.project.isFetching === true
          ? <div>Loading...</div>
          : null }

          {this.props.project.tree.map((item) => this.renderItem(item))}
          {this.props.children}
      </div>
    )
  }
}
