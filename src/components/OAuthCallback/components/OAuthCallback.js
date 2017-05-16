
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
  componentWillMount() {
    let params = new URLSearchParams(window.location.search)
    if (params.has('code')) {
      axios.request({
        url: `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${params.get('code')}`, 
        method: 'post',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      })
      .then(function (response) {
        alert(response);
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
