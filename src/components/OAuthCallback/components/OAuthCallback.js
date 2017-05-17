
/********************************************************
 * Callback component 
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router';
import { CLIENT_ID, CLIENT_SECRET } from '~/config/api'
import axios from 'axios'

export default class OAuthCallback extends Component {
  constructor(props) {
    super(props)
  }
  saveAuth = (code) => {
    console.log(code)
  }
  componentWillMount() {
    let params = new URLSearchParams(window.location.search)
    if (params.has('code')) {
      axios.request({
        url: `http://localhost:6013/auth/${params.get('code')}`, 
        method: 'GET',
      })
      .then(function (response) {
        var code = response.data['token']
        alert(JSON.stringify(code));
        window.localStorage.setItem('githubKey', code)
        browserHistory.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      alert('No code')
    }
  }
  render () {
    return (
      <div className="">
      Loading..
      </div>
    )
  }
}
