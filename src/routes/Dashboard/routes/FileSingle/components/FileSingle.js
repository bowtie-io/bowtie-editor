import React, { PropTypes, Component } from 'react'

export default class FileSingle extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  render () {
    return (
      <div className="fileSingle">
      {this.props.params.fileName}
      </div>
    )
  }
}
