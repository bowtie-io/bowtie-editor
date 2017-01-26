/********************************************************
 * ContentEditor.js
 *
 * ContentEditor is our wysiwyg editor that compiles
 * all of the collections functionality into a usable
 * interface for non-technical users.
 *
 * PropTypes:
 *   - incoming content from request
 *   - saveFile()
 *
 * Overall, we want the editor to be as _DUMB_ as possible.
 * That way, it will be able to consume all of the 
 * different file types and "react" off of the props.
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { EditorState, ContentState, convertFromText, ContentBlock } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './ContentEditor.sass'

export default class ContentEditor extends Component {
  constructor(props) {
    super(props)

    //////////////////////////////////////////
    //	Constants for building the commit
    //////////////////////////////////////////
    const sha           = this.props.sha
    const path          = this.props.path
    const commitMessage = "Hello World Commit"
    
    this.focus = () => this.refs.editor.focus();
    if (this.props.content) {
      const state = ContentState.createFromText(this.props.content) || "";
      this.state = {
        editorState: EditorState.createWithContent(state)
      }
    } else {
      this.state = {
        editorState: EditorState.createEmpty()
      }
    }
  }
  static propTypes = {
    // Document all properties
  }
  onEditorStateChange = (editorState) => {
    this.setState({editorState})
  }
  onFileUpload = (payload) => {
  }
  render () {
    return (
      <div className="contentEditor">
      <button onClick={ () => this.props.updateFile(this.state.editorState.getCurrentContent().getPlainText(), this.props.sha, this.props.path, this.props.commitMessage)  }>Update</button>
        <Editor
          toolbarClassName="home-toolbar"
          wrapperClassName="home-wrapper"
          editorClassName="home-editor"
          editorState={this.state.editorState}
          onEditorStateChange={ this.onEditorStateChange }
          uploadCallback={ this.onFileUpload }
          ref="editor"
        />
      </div>
    )
  }
}
