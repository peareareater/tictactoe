import { call, put, takeLatest } from '@redux-saga/core/effects'
import actionTypes from '../constants/user'
import client from '../client'
import history from '../lib/history'
import { enumTabs } from '../constants/auth'
import { ACCESS_TOKEN } from '../constants'
import { setCookie } from '../lib/cookie'

function* login({ payload }) {
    try {
        const user = yield call(client.post, '/user/login', payload)
        setCookie(ACCESS_TOKEN, user.token)
    } catch (error) {
        yield put({ type: actionTypes.loginError, payload: error })
    }
}

function* register({ payload }) {
    try {
        yield call(client.post, '/user/register', payload)
        history.push('/auth', { tab: enumTabs.login })
    } catch (error) {
        yield put({ type: actionTypes.loginError, payload: error })
    }
}

export default function* postsSaga() {
    yield takeLatest(actionTypes.login, login)
    yield takeLatest(actionTypes.register, register)
}
