import userActions from '../actions/user'
import { connect } from 'react-redux'
import AppBar from '../components/AppBar/index'

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userInfo) => dispatch(userActions.login(userInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
