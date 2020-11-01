import actionTypes from '../constants/index'

const initialState = {
    errors: [],
}

const app = (store = initialState, { payload, type }) => {
    switch (type) {
        case actionTypes.setError:
            return { ...store, errors: store.errors.concat(payload) }
        case actionTypes.closeError:
            const errorIndex = store.errors.findIndex((i) => i.id === payload)
            return {
                ...store,
                errors: store.errors.map((i) => i.id !== payload),
            }
        default:
            return store
    }
}

export default app
