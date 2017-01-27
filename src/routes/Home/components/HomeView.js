import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { PROJECTS } from '~/db/schema'

export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // set initialState
      // local Class state only
    }
  }
  static propTypes = {
    // Document all properties
  }
  renderProjectCard = (project) => {
    return (
      <div className="col">
        <div className="card card-block">
          <img src="https://placehold.it/640x480" />
          <p>
            <Link to={{pathname: `project/${project.id}/`}}>
              {project.name}
            </Link>
          </p>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className="row">
      { PROJECTS.map((project) => this.renderProjectCard(project)) }
      </div>
    )
  }
}




