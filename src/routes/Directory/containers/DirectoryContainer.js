/********************************************************
 * What is this Container? What does it connect? 
 *
 * @flow
 ********************************************************/

import { connect } from 'react-redux'                 // import connect
import { fetchDirectory } from '../modules/directory' // import action creators
import Directory from '../components/Directory'       // import component to connect

function mapStateToProps ({project}, {...props}) {
  return {
    project,
    ...props
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchDirectory: () => dispatch(fetchDirectory()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory)
