import axios from 'axios'
const API_URL = 'http://localhost:8080'
import { dispatch } from '../store'
import commonActionTypes from '../constants/index'
import { v4 } from 'uuid'

const methods = {
    get: 'get',
    post: 'post',
}
async function call(method, url, params) {
    try {
        const result = await axios[method](`${API_URL}${url}`, params)
        console.log(result)
        return result.data
    } catch (e) {
        dispatch({
            type: commonActionTypes.setError,
            payload: { message: e.message, id: v4() },
        })
        return e.message;
    }
}
export default {
    get: (url, params) => call(methods.get, url, params),
    post: (url, params) => call(methods.post, url, params),
}
