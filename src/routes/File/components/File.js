/********************************************************
 * File.js 
 *
 * Responsible for serving the Editor necessary props
 * and connecting the editor to the selected doc's
 * content.
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { ContentEditor } from '~/components'

export default class File extends Component {
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
  componentWillMount() {
    this.props.fetchFile(this.props.params.fileName)
  }
  render () {
    return (
      <div className="">
        <ContentEditor />
      </div>
    )
  }
}
