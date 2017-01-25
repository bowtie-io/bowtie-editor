/********************************************************
 * ProjectContainer
 *
 * The ProjectContainer is highest level container for 
 * the project experience. It will populate the state
 * tree with files so that they are navigable, etc.
 *
 * @flow
 ********************************************************/

import { connect } from 'react-redux'									// import connect
import { fetchProject } from '../modules/project'		  // import action creators
import Project from '../components/Project'						// import component to connect

function mapStateToProps ({project}, {...props}) {
  return {
    project,
    ...props
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchProject: () => dispatch(fetchProject()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
