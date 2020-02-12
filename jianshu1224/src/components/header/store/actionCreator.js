import * as types from './actionTypes'
import axios from 'axios'

export const getInputFocusAction = () => ({ type: types.INPUT_FOCUS })

export const getInputBlurAction = () => ({ type: types.INPUT_BLUR })

export const getListData = () => {
    return (dispatch) => {
        axios.get('/oapi/header_list.json').then(res => {
            dispatch({ type: types.LIST_DATA, data: res.data })
        }).catch(() => console.log('error'))
    }
}
