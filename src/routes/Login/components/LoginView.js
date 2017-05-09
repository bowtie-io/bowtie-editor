/********************************************************
 * LoginView component renders login box. 
 *
 * @flow
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import FileManagerContainer from '~/routes/FileManager/containers/FileManagerContainer';
import { browserHistory } from 'react-router'
import { CLIENT_ID } from '~/config/api'

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // set initialState
      // local Class state only
    }
  }
  componentWillMount() {
    if (window.localStorage.getItem('githubKey')) {
      this._renderDashboard()
    }
  }
  static propTypes = {
    // Document all properties
  }
  _renderDashboard = () => {
    browserHistory.push('/dashboard')
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
        ? <div>logged in </div>
        : this._renderLogin() 
      }
      </div>
    )
  }
}
