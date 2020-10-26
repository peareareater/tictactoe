import userActionTypes from '../constants/user'

export default {
    login: payload => ({ type: userActionTypes.login, payload }),
    register: payload => ({ type: userActionTypes.register, payload }),
    logout: payload => ({ type: userActionTypes.logout, payload })
}
