/********************************************************
 * LoginView component renders login box. 
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { CLIENT_ID } from '~/config/api'

export default class LoginView extends Component {
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
  _renderDashboard = () => {
    return (
      <div>Dashboard</div>
    )
  }
  _renderLogin = () => {
    return (
      <a href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${CLIENT_ID}`}>Login to Github</a>
    )
  }
  render () {
    return (
      <div className="">
      {window.localStorage.githubKey
        ? this._renderDashboard()
        : this._renderLogin() 
      }
      </div>
    )
  }
}
