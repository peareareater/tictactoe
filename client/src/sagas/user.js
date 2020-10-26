import { call, put, takeLatest } from '@redux-saga/core/effects'
import actionTypes from '../constants/user';
import client from '../client';

function* login({ payload }) {
    try {
        const result = yield call(client.post, '/user/login', payload);
        console.log(result, 'RES');
    } catch (e) {
        yield put({ type: actionTypes.loginError, error: e.message });
    }
}

function* register({ payload }) {
    try {
        const result = yield call(client.post, '/user/register', payload);
    } catch (e) {
        yield put({ type: actionTypes.loginError, error: e.message });
    }
}

export default function* postsSaga() {
    yield takeLatest(actionTypes.login, login);
    yield takeLatest(actionTypes.register, register);
}