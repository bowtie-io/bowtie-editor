/********************************************************
 * DirectoryReducer 
 *
 * This reducer handles all of the state and actions
 * related to navigating through nestd directories.
 *
 * @flow
 ********************************************************/

import { connect } from 'react-redux'                      // import connect
import { fetchDirectory } from '../modules/directory' // import action creators
import Directory from '../components/Directory'            // import component to connect

function mapStateToProps ({directory}, {...props}) {
  return {
    directory,
    ...props
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchDirectory: (path) => dispatch(fetchDirectory(path)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory)
