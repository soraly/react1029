import { INPUT_CHANGE, SUBMIT, DELETE, INIT_LIST_ACTION, USER_INFO_ACTION } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({ type: INPUT_CHANGE, value })

export const getSubmitAction = () => ({ type: SUBMIT })

export const getDeleteAction = (index) => ({ type: DELETE, index })

export const initListAction = (listData) => ({ type: INIT_LIST_ACTION, listData })

export const getListData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8989/getList').then(res => {
            const action = initListAction(res.data);
            dispatch(action);
        })
    }
}

export const userInfoAction = (data) => ({ type: USER_INFO_ACTION, data })

export const getUserInfo = () => {
    return dispatch => {
        axios.get('http://localhost:8989/userInfo').then(res => {
            const action = userInfoAction(res.data);
            dispatch(action);
        })
    }
}