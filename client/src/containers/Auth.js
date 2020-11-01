import userActions from '../actions/user'
import { connect } from 'react-redux'
import Auth from '../pages/Auth'
import { withRouter } from 'react-router'

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userInfo) => dispatch(userActions.login(userInfo)),
        register: (userInfo) => dispatch(userActions.register(userInfo)),
        removeError: () => dispatch(userActions.removeError()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
