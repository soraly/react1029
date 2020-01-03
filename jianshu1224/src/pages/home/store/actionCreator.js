import axios from 'axios'
import * as types from './actionTypes'

const getTopicSuccess = (data) => {
    return {
        type: types.TOPIC_LIST_SUCCESS,
        data
    }
}
const getMainListSuccess = (data) => {
    return {
        type: types.MAIN_LIST_SUCCESS,
        data
    }
}

export const getTopicAction = () => {
    return (dispatch) => {
        axios.get('/oapi/topics.json').then(res => {
            dispatch(getTopicSuccess(res.data))
        })
    }
}

export const getMainListAction = () => {
    return (dispatch) => {
        axios.get('/oapi/mainlist.json').then(res => {
            dispatch(getMainListSuccess(res.data))
        })
    }
}