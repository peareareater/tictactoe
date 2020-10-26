import userActions from '../actions/user'
import { connect } from 'react-redux'
import Auth from '../pages/Auth'

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userInfo) => dispatch(userActions.login(userInfo)),
        register: (userInfo) => dispatch(userActions.register(userInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)