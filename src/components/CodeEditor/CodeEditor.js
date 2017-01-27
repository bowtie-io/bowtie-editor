/********************************************************
 * CodeEditor.js
 *
 * Our code editor is responsible for rendering all of
 * the files that aren't of a specific type content-type.
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import "./CodeEditor.sass"
// Import all of the codemirror libraries
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/sass/sass');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/yaml/yaml');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/vim');
require('codemirror/addon/selection/mark-selection');

export default class CodeEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "Loading..."
    }
  }
  static propTypes = {
    // Document all properties
  }
  componentDidMount() {
    this.state = {
      code: this.props.content
    }
  }
  updateCode = (newCode) => {
    console.log(newCode)
    this.setState({
      code: newCode
    }) 
    
  }
  render () {
    return (
      <div className="codeEditor">
      <button className="editor-button" onClick={ () => this.props.updateFile(this.state.code, this.props.sha, this.props.path, this.props.commitMessage)  }>Update</button>
          <CodeMirror value={this.state.code} 
            onChange={this.updateCode} 
            options={{
              mode: this.props.mode || "html", 
              lineNumbers: true, 
              theme: 'railscasts', 
              keyMap: "vim",
              styleSelectedText: true
            }}
          />
      </div>
    )
  }
}
