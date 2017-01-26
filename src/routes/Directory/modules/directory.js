/********************************************************
 * DirectoryReducer
 *
 * This reducer separates the current directory from
 * the project state. It simply just a wrapper for the
 * file browser in a different context, and we'll manage
 * that state here.
 *
 * @flow
 ********************************************************/
const initialState = {}
const REQUEST_DIR = 'REQUEST_DIR'
const RECEIVE_DIR = 'RECEIVE_DIR'
const FAIL_DIR    = 'FAIL_DIR'

export function requestDir() {
  return {
    type: 'REQUEST_DIR',
  }
}

export function receiveDir(data) {
  return {
    type: 'RECEIVE_DIR',
    tree: data,
  }
}
export function failDir(data) {
  return {
    type: 'FAIL_DIR',
    error: data
  }
}
export function fetchDirectory(path) {
  return dispatch => { // return redux-thunk
    dispatch(requestDirectory()) // set state to fetching
    return fetch(`https://api.github.com/repos/igolden/igolden.github.io/contents/${path}`, {
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
    .then((data) => dispatch(receiveDirectory(data)))
    .catch((err) => console.error(err))
  }
}


export default function directory (state = initialState, action) {
  switch (action.type) {
    case REQUEST_DIR :
      return {
      ...state,
      isFetching: true
    }
    case RECEIVE_DIR :
      return {
      ...state,
      isFetching: false,
      tree: action.tree
    }
    case FAIL_DIR :
      return {
      ...state,
      isFetching: false,
      error: action.error
    }
    default :
      return state
  }
}

