/********************************************************
 * FileSingle reducer
 *
 * Used for fetching the data for one file, and initiating
 * and editing sequence. This reducer is also responsible
 * for POSTing to the github api to save the file
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
    contents: data
    }
}
export function failFile(data) {
  return {
    type: 'FAIL_FILE',
    error: data
    }
}

export function fetchFile(url) {
  return dispatch => { // return redux-thunk
    dispatch(requestFile()) // set state to fetching
    return fetch(url, {
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
      .then((data) => dispatch(receiveFile(data)))
      .catch((err) => console.error(err))
  }
}



export default function fileSingle (state = initialState, action) {
  switch (action.type) {
  case REQUEST_FILE :
    return {
    ...state,
    isFetching: true
  }
  case RECEIVE_FILE :
    return {
    ...state,
    contents: action.contents
  }
  case FAIL_FILE :
    return {
    ...state,
    fileError: action.error
  }
    default :
      return state
  }
}
