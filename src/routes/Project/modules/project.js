import 'whatwg-fetch'

/********************************************************
 * This is the DashboardReducer, which will set the initial
 * state for a project, after authing in. Realistically,
 * this should be scoped per project in the future
 *
 * @flow
 ********************************************************/
const initialState = {
  isFetching: false,
  tree: [],
}
const REQUEST_PROJECT = 'REQUEST_PROJECT'
const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
const FAIL_PROJECT = 'FAIL_PROJECT'

export function requestProject() {
  return {
    type: 'REQUEST_PROJECT',
    isFetching: true
    }
}
export function receiveProject(data) {
  return {
    type: 'RECEIVE_PROJECT',
    tree: data
    }
}
export function failProject(data) {
  return {
    type: 'FAIL_PROJECT',
    error: data
    }
}
export function fetchProject() {
  return dispatch => { // return redux-thunk
    dispatch(requestProject()) // set state to fetching
    return fetch("https://api.github.com/repos/igolden/igolden.github.io/contents/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return null
        }
        })
      .then((data) => dispatch(receiveProject(data)))
      .catch((err) => console.error(err))
  }
}

export default function project (state = initialState, action) {
  switch (action.type) {
  case REQUEST_PROJECT :
    return {
    ...state,
    isFetching: true,
  }
  case RECEIVE_PROJECT :
    return {
    ...state,
    isFetching: false,
    tree: action.tree
  }
  case FAIL_PROJECT :
    return {
    ...state,
    fetchError: action.error
  }
    default :
      return state
  }
}
