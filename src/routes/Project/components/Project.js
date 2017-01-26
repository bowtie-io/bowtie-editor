import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { FileBrowser } from '~/components'

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
  render () {
    return (
      <div className="project">
        {this.props.project.isFetching === true
          ? <div>Loading...</div>
          : <FileBrowser 
                files={this.props.project}/> }
      </div>
    )
  }
}
