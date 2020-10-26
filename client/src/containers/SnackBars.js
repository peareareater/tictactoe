import commonActions from '../actions/common'
import { connect } from 'react-redux'
import SnackBars from '../components/SnackBars'

function mapStateToProps(state) {
    return {
        errors: state.errors,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeError: (id) => dispatch(commonActions.closeError(id)),
        setError: (error) => dispatch(commonActions.setError(error)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackBars)
