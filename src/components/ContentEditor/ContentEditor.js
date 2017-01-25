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
import { EditorState, ContentState, convertFromHTML, ContentBlock } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class ContentEditor extends Component {
  constructor(props) {
    super(props)
    this.focus = () => this.refs.editor.focus();
    const sampleMarkup =
      '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
      '<a href="http://www.facebook.com">Example link</a>';
    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(blocksFromHTML);
    this.state = {
      editorState: EditorState.createWithContent(state)
    }
  }
  static propTypes = {
    // Document all properties
  }
  onEditorStateChange = (editorState) => {
    console.log(this.state)
    
  }
  onFileUpload = (payload) => {
  }
  render () {
    return (
      <div className="contentEditor">
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
