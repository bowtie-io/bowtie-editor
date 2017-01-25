import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'
import { fetchProject } from '../modules/dashboard'

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
)(Dashboard)
