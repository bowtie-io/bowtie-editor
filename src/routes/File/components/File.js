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
    switch (this.props.location.pathname.split('.')[1]) {
      case "html" :
        return  <CodeEditor  
                    mode="htmlmixed"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
      case "js" :
        return  <CodeEditor  
                    mode="javascript"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
      case "yml" || "yaml":
        return  <CodeEditor  
                    mode="yaml"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
      case "xml":
        return  <CodeEditor  
                    mode="xml"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
               
      case "scss" || "sass" :
        return  <CodeEditor  
                    mode="sass"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
      case "md" :
        return  <CodeEditor  
                    mode="markdown"
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
               
      default :
        return  <ContentEditor 
                    sha={this.props.file.sha} 
                    path={this.props.file.path} 
                    content={this.props.file.content} 
                    updateFile={this.props.updateFile} /> 
               
    }
  }
}
