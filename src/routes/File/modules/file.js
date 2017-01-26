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

//////////////////////////////////////////
//	All of the incoming requests to
//	populate our data.
//////////////////////////////////////////

const REQUEST_FILE = 'REQUEST_FILE'
const RECEIVE_FILE = 'RECEIVE_FILE'
const FILE_FAIL    = 'FILE_FAIL'
const DECODE_FILE  = 'DECODE_FILE'

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
export function fileFail(data) {
  return {
    type: 'FILE_FAIL',
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

//////////////////////////////////////////
//	All of the outbound requests to 
//	interface with Github and other
//	external resources
//////////////////////////////////////////

const POST_FILE            = 'UPDATE_FILE'
const RECEIVE_UPDATED_FILE = 'RECEIVE_UPDATED_FILE'

export function postFile() {
  return {
    type: 'POST_FILE',
    }
}

export function receiveUpdatedFile(sha, path) {
  return {
    type: 'RECEIVE_UPDATED_FILE',
    sha: sha,
    path: path
    }
}

export function updateFile(content, sha, path, message) {
  return dispatch => { // return redux-thunk
    dispatch(postFile()) // set state to fetching
    return fetch(`https://api.github.com/repos/igolden/igolden.github.io/contents/${path}`, {
      method            : "PUT",
      headers           : {
        "Content-Type"  : "application/json",
        "Authorization" : "token f2d64d14d1b70994ed6a555140c6b6e9101c616c"
      },
      body: JSON.stringify({
        "message": "RCTCommit",
        "committer": {
          "name": "Ian Golden",
          "email": "ian@iangolden.com"
        },
        "content": new Buffer(content).toString('base64'),
        "sha": sha
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return null
        }
        })
      .then((data) => dispatch(receiveUpdatedFile(data)))
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
    sha: action.sha,
    path: action.path
  }
  case DECODE_FILE :
    return {
    ...state,
    isFetching: false,
    content: action.content
  }
  case FILE_FAIL :
    return {
    ...state,
    isFetching: false,
    fileError: action.error
  }
  case POST_FILE :
    return {
    ...state,
    isFetching: true
  }
  case RECEIVE_UPDATED_FILE :
    return {
    ...state,
    sha: action.sha,
    path: action.path
  }
    default :
      return state
  }
}
