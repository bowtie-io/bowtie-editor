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
import { sanitizeDirRoute } from '~/utils/sanitize'
import { CodeEditor } from '~/components'

export default class File extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // set initialState
      // local Class state only
    }


  }
  componentDidMount() {
    this.props.fetchFile(this.props.params.fileName)
  }
  static propTypes = {
    // Document all properties
  }
  render () {
          //{ this.props.file.isFetching === true
            //? <div>Loading...</div>
            //: <ContentEditor 
                  //sha={this.props.file.sha} 
                  //path={this.props.file.path} 
                  //content={this.props.file.content} 
                  //updateFile={this.props.updateFile} /> }
    return (
          <CodeEditor content={this.props.file.content} />
    )
  }
}
