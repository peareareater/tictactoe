import userActions from '../constants/user'

const initialState = {
    isAuthenticated: localStorage.getItem('accessToken'),
    loading: false,
    error: '',
}

const user = (store = initialState, { payload, type }) => {
    switch (type) {
        case userActions.login:
            return { ...store, loading: true }
        case userActions.loginError:
            return { ...store, error: payload, loading: false }
        case userActions.loginSuccess:
            return { ...store, loading: false, isAuthenticated: true }
        case userActions.removeError:
            return { ...store, error: '' }
        default:
            return store
    }
}

export default user
