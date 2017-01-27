import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { FileBrowser } from '~/components'
import  CodeMirror  from 'react-codemirror'
import { PROJECTS } from '~/db/schema'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files : [],
      dirs  : [],
    }
  }
  componentDidMount() {
      this.props.fetchProject(this.props.params.splat)
  }
  render () {
    return (
      <div className="project">
        {this.props.project.isFetching === true
          ? <div>Loading...</div>
          : <FileBrowser 
                files={this.props.project.tree}/> }
      </div>
    )
  }
}
