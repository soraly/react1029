import axios from 'axios'
import * as types from './actionType'

export const getDeleteAction = (index) => ({ type: types.DELETE, value: index })
export const getUpdateAction = (obj) => ({ type: 'UPDATE', value: obj })

export const getListAction = () => {
    return dispatch => {
        axios.get('http://localhost:8989/getList').then(res => {
            dispatch({ type: types.GET_LIST_DONE, value: res.data })
        })
    }
}