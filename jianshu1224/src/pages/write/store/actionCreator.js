import { types } from './index'
import axios from 'axios'

const getUserInfoSuccess = (data) => {
    return { type: types.USER_INFO_SUCCESS, data }
}
const getArticleSuccess = (data) => {
    return { type: types.GET_DETAIL_CONTENT, data }
}


export const userInfoAction = (id) => {
    return (dispatch) => {
        axios.get('/oapi/user_info.json?id='+id).then((res) => {
            dispatch(getUserInfoSuccess(res.data));
        })
    }
}

export const detailArticleAction = (id) => {
    return (dispatch) => {
        axios.get('/oapi/article.json?id='+id).then((res) => {
            dispatch(getArticleSuccess(res.data));
        })
    }
 }