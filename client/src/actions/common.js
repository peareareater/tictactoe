import commonActionTypes from '../constants/index'

export default {
    closeError: id => ({ type: commonActionTypes.closeError, payload: id }),
    setError: error => ({ type: commonActionTypes.setError, payload: error }),
}
