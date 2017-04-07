/********************************************************
 * FileManager.js 
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
import { CodeEditor, FileBrowser } from '~/components'
import { sanitize } from '~/utils/sanitize'

export default class FileManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location
    }
  }
  componentDidMount() {
    this.props.fetchPath(this.props.params.splat)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.splat != nextProps.params.splat) {
      this.props.fetchPath(nextProps.params.splat)
    }
  }

  render () {
    if (this.props.file.isFetching === true) {
      return <div>Loading</div>
    } else if (this.props.file.fail === true) {
      /********************************************************
       * VERY basic 404 handling. This should eventually get
       * replaced with a 
       ********************************************************/
      return (
      <div>
        {this.props.file.error.name}
      </div>
      )    
    } else {

      if (this.props.file.directory === true) {
        return (
          <div className="">
          {sanitize(this.props.location.pathname)} Directory
          <br />
          <hr />
          <FileBrowser 
          files={this.props.file.tree} currentDir={this.props.params.splat} /> 
          </div>
        )
      } else {
        if (this.props.file.sha) {
          switch (this.props.location.pathname.split('.')[1]) {
            case "html" :
              return  <CodeEditor  
                        mode="htmlmixed"
                        sha={this.props.file.sha} 
                        path={this.props.file.path} 
                        content={this.props.file.content} 
                        isFetching={this.props.file.isFetching}
                        fetchPath={(path) => this.props.fetchPath(path)}
                        updateFile={this.props.updateFile} /> 
            case "js" :
              return  <CodeEditor  
                        mode="javascript"
                        sha={this.props.file.sha} 
                        path={this.props.file.path} 
                        content={this.props.file.content} 
                        isFetching={this.props.file.isFetching}
                        fetchPath={(path) => this.props.fetchPath(path)}
                        updateFile={this.props.updateFile} /> 
            case "yml" || "yaml":
              return  <CodeEditor  
                        mode="yaml"
                        sha={this.props.file.sha} 
                        path={this.props.file.path} 
                        content={this.props.file.content} 
                        isFetching={this.props.file.isFetching}
                        fetchPath={(path) => this.props.fetchPath(path)}
                        updateFile={this.props.updateFile} /> 
            case "xml":
              return  <CodeEditor  
                        mode="xml"
                        sha={this.props.file.sha} 
                        path={this.props.file.path} 
                        content={this.props.file.content} 
                        isFetching={this.props.file.isFetching}
                        fetchPath={(path) => this.props.fetchPath(path)}
                        updateFile={this.props.updateFile} /> 

            case "scss" || "sass" :
              return  <CodeEditor  
                        mode="sass"
                        sha={this.props.file.sha} 
                        path={this.props.file.path} 
                        content={this.props.file.content} 
                        isFetching={this.props.file.isFetching}
                        fetchPath={(path) => this.props.fetchPath(path)}
                        updateFile={this.props.updateFile} /> 
            case "md" :
              return  <CodeEditor  
                        mode="markdown"
                        sha={this.props.file.sha} 
                        path={this.props.file.path} 
                        content={this.props.file.content} 
                        isFetching={this.props.file.isFetching}
                        fetchPath={(path) => this.props.fetchPath(path)}
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
    }
  }   
}

