import rootReducer from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from '../sagas/index'

export const configureStore = (sagaContext = {}) => {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(saga, { context: sagaContext })
    return store
}
