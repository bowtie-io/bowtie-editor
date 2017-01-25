import Project from '../components/Project'
import { connect } from 'react-redux'
import { fetchProject } from '../modules/project'

function mapStateToProps ({project}, {navigator}) {
  return {
    project,
    navigator
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
