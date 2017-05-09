
/********************************************************
 * Callback component 
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router';

export default class OAuthCallback extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let params = new URLSearchParams(window.location.search)
    if (params.has('code')) {
      window.localStorage.setItem('githubKey', params.get('code'))
      browserHistory.push('/');
      alert(window.localStorage.getItem('githubKey'))
    } else {
      alert('No code')
    }
  }
  render () {
    return (
      <div className="">
          ClassName
      </div>
    )
  }
}
