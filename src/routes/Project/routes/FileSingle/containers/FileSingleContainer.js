import { connect } from 'react-redux'
import FileSingle from '../components/FileSingle'
import { fetchFileSingle } from '../modules/fileSingle'
function mapDispatchToProps (dispatch) {
  return {
    fetchFileSingle: () => dispatch(fetchFileSingle()),
  }
}
function mapStateToProps ({fileSingle}) {
  return {
    fileSingle,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileSingle)
