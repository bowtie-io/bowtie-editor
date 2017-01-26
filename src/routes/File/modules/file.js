/********************************************************
 * FileReducer
 *
 * Will handle the actions and state surrounding the
 * fetch and render of remote file contents.
 *
 * @flow
 ********************************************************/
const initialState = {
  isFetching: true,
  content: "",
  path: "",
  sha: "",
  commitMessage: ""
}
const REQUEST_FILE = 'REQUEST_FILE'
const RECEIVE_FILE = 'RECEIVE_FILE'
const FAIL_FILE    = 'FAIL_FILE'
const DECODE_FILE = 'DECODE_FILE'

export function decodeFile(data) {
  return {
    type: 'DECODE_FILE',
    content: data, 
    }
}



export function requestFile() {
  return {
    type: 'REQUEST_FILE',
    }
}
export function receiveFile(sha, path) {
  return {
    type: 'RECEIVE_FILE',
    sha: sha,
    path: path
    }
}
export function failFile(data) {
  return {
    type: 'FAIL_FILE',
    error: data
    }
}

export function fetchFile(fileName) {
  return dispatch => { // return redux-thunk
    dispatch(requestFile()) // set state to fetching
    return fetch(`https://api.github.com/repos/igolden/igolden.github.io/contents/${fileName}`, {
      method: "GET",
      })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return null
        }
        })
        .then((file)                    => {
            dispatch(receiveFile(file.sha, file.path))
            return file
        })
      .then((file)                      => Buffer.from(file.content, 'base64').toString('ascii') )
      .then((content)                   => dispatch(decodeFile(content)) )
      .catch((err)                      => console.error(err) )
  }
}



export default function file (state = initialState, action) {
  switch (action.type) {
  case REQUEST_FILE :
    return {
    ...state,
    isFetching: true
  }
  case RECEIVE_FILE :
    return {
    ...state,
    sha: action.sha,
    path: action.path
  }
  case DECODE_FILE :
    return {
    ...state,
    isFetching: false,
    content: action.content
  }
  case FAIL_FILE :
    return {
    ...state,
    isFetching: false,
    fileError: action.error
  }
    default :
      return state
  }
}
