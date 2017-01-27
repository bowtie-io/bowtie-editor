/********************************************************
 * FileReducer
 *
 * Will handle the actions and state surrounding the
 * fetch and render of remote file contents.
 *
 * @flow
 ********************************************************/
import { API_ROOT, TOKEN } from '~/config/api'
import { PROJECT } from '~/db/schema'

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

const REQUEST_PATH = 'REQUEST_PATH'
const RECEIVE_PATH = 'RECEIVE_PATH'
const PATH_FAIL    = 'PATH_FAIL'
const DECODE_PATH  = 'DECODE_PATH'
const LOAD_PATH = 'LOAD_PATH'


export function requestPath() {
  return {
    type: 'REQUEST_PATH',
    }
}
export function receivePath(pathResponse) {
  let type = Object.prototype.toString.call(pathResponse)
  if ( type == '[object Array]') {
    return {
      type: 'RECEIVE_PATH',
      tree: pathResponse,
      directory: true
    }
  } else {
    return {
      type: 'RECEIVE_PATH',
      sha: pathResponse.sha,
      path: pathResponse.path,
      directory: false
    }
  }
}
export function decodePath(data) {
  return {
    type: 'DECODE_PATH',
    content: data, 
    }
}
export function loadPath() {
  return {
    type: 'LOAD_PATH',
    }
}
export function pathFail(data) {
  return {
    type: 'PATH_FAIL',
    error: data
    }
}

export function fetchPath(path) {
  return dispatch => { // return redux-thunk
    dispatch(requestPath()) // set state to fetching
    return fetch(`${API_ROOT}/${PROJECT.full_name}/contents/${path}`, {
      method: "GET",
      headers: {
        "Accept"        : 'application/json',
        "Authorization" : `token ${TOKEN}`
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        return null
      }
    })
    /********************************************************
On branch refactor/more-intuitive-routes-and-file-browsing
Changes not staged for commit:
	modified:   src/routes/FileManager/components/FileManager.js
	modified:   src/routes/FileManager/modules/file.js

no changes added to commit
     *    } else {
           * return response
     *    }
     * } )
     ********************************************************/
    .then((path) => {
      dispatch(receivePath(path))
      return path
    })
    .then((data) =>  {
      const input = data
      if (data.content) {
        let buffer = Buffer.from(input.content, 'base64').toString('ascii')
        let data = {
          file: true,
          data: buffer
        }
        return data
      } else {
      return data
      }
    })
    .then((data) => {
      let decodedData = data
      if (decodedData.file === true) {
        dispatch(decodePath(decodedData.data))
      }
    })
    .then(()   => dispatch(loadPath()))
    .catch((err) => {
      console.log("============================================")
      console.log(err);
      console.log("============================================")
      dispatch(pathFail(err))
    })
  }
}

//////////////////////////////////////////
//	All of the outbound requests to 
//	interface with Github and other
//	external resources
//////////////////////////////////////////

const POST_FILE            = 'POST_FILE'
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
    return fetch(`${API_ROOT}/${PROJECT.full_name}/contents/${path}`, {
      method            : "PUT",
      headers           : {
        "Content-Type"  : "application/json",
        "Authorization" : `token ${TOKEN}`
      },
      body: JSON.stringify({
        "message": "RCTCommit",
        "committer": {
          "name" : `${PROJECT.current_user.name}`,
          "email": `${PROJECT.current_user.email}`
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
    .then((data) => dispatch(fetchFile(`${path}`)))
  }
}



export default function file (state = initialState, action) {
  switch (action.type) {
  case REQUEST_PATH :
    return {
    ...state,
    content: "",
    isFetching: true
  }
  case RECEIVE_PATH :
    return {
    isFetching: true,
    sha: action.sha,
    path: action.path,
    tree: action.tree,
    directory: action.directory
  }
  case DECODE_PATH :
    return {
    ...state,
    content: action.content
  }
  case PATH_FAIL :
    return {
    ...state,
    isFetching: false,
    fail: true,
    error: action.error
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
  case LOAD_PATH :
    return {
    ...state,
    isFetching: false,
  }
    default :
      return state
  }
}
