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
require('codemirror/mode/javascript/javascript');
require('codemirror/keymap/vim');
require('codemirror/addon/selection/mark-selection');

export default class CodeEditor extends Component {
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
  render () {
    console.log("hy")
    console.log(this.props.content)
    return (
      <div className="codeEditor">
          : <CodeMirror value={this.props.content} onChange={this.updateCode} options={{
            mode: 'javascript', 
            lineNumbers: true, 
            theme: 'railscasts', 
            keyMap: "vim",
            styleSelectedText: true
          }} />}
      </div>
    )
  }
}
