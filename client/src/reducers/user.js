import userActions from '../constants/user'

const initialState = {
    isAuthenticated: localStorage.getItem('accessToken'),
    loading: false,
}

const user = (store = initialState, { payload, type }) => {
    switch (type) {
        case userActions.login:
            return { ...store, loading: true }
        default:
            return store
    }
}

export default user
