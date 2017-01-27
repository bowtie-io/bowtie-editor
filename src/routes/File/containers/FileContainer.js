/********************************************************
 * FileContainer 
 *
 * Responsible for fetching the content of a single file.
 *
 * @flow
 ********************************************************/

import { connect } from 'react-redux'                   // import connect
import { fetchPath, updateFile } from '../modules/file' // import action creators
import File from '../components/File'                   // import component to connect

function mapStateToProps ({file}, {...props}) {
  return {
    file,
    ...props
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchPath: (fileName) => dispatch(fetchPath(fileName)),
    updateFile: (content, sha, path, message) => dispatch(updateFile(content, sha, path, message)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File)
