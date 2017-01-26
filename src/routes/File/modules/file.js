/********************************************************
 * FileReducer
 *
 * Will handle the actions and state surrounding the
 * fetch and render of remote file contents.
 *
 * @flow
 ********************************************************/
const initialState = {

}
const REQUEST_FILE= 'REQUEST_FILE'
const RECEIVE_FILE = 'RECEIVE_FILE'
const FAIL_FILE = 'FAIL_FILE'



export function requestFile() {
  return {
    type: 'REQUEST_FILE',
    }
}
export function receiveFile(data) {
  return {
    type: 'RECEIVE_FILE',
    content: data
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
      .then((file) => file.content)
      .then((b64) => Buffer.from(b64, 'base64').toString('ascii'))
      .then((content) => dispatch(receiveFile(content)))
      .catch((err) => console.error(err))
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
