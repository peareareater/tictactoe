import rootReducer from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export const dispatch = store.dispatch;

sagaMiddleware.run(saga)
