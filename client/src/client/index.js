import axios from 'axios'
import { dispatch } from '../store'
import commonActionTypes from '../constants/index'
import { v4 } from 'uuid'

const API_URL = 'http://localhost:8080'

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
        const data = e && e.response && e.response.data.message
        throw data || e.message
    }
}
export default {
    get: (url, params) => call(methods.get, url, params),
    post: (url, params) => call(methods.post, url, params),
}
