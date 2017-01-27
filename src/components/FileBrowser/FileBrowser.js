/********************************************************
 * FileBrowser
 *
 * This will be the component that maps over the array
 * of items in a file tree, and then organizes, styles,
 * and wires them up the global nav.
 *
* @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { removeLeadingSlash } from '~/utils/sanitize'

export default class FileBrowser extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  static propTypes = {
  }
  renderFileItem = (item, index) => {
      return (
        <div>
        <Link to={{pathname: `${window.location.pathname}/${item.name}`}}>
          {item.name} - FILE
          </Link>
        </div>
      )
  }
  renderDirItem = (item, index) => {
      return (
        <div>
          <Link to={{pathname: `${window.location.pathname}/${item.name}`}}>
             {item.name} - DIR
           </Link>
         </div> 
      )
  }
  renderItem = (item, index) => {
    if (item.type === "file") {
      return this.renderFileItem(item)
    } else {
      return this.renderDirItem(item)
    }
  }

  render () {
    console.log(this.props)
    return (
      <div className="container">
        {this.props.files.tree.map((item) => this.renderItem(item))}
      </div>
    )
  }
}

