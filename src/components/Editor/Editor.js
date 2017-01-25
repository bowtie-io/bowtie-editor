import React, { PropTypes, Component } from 'react'
import { Editor } from 'react-draft-wysiwyg'

export default class Editor extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  render () {
    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          toolbarClassName="home-toolbar"
          wrapperClassName="home-wrapper"
          editorClassName="home-editor"
          onEditorStateChange={this.onEditorStateChange}
          uploadCallback={uploadImageCallBack}
        />
      </div>
    )
  }
}
