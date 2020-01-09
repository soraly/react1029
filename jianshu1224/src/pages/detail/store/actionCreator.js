import { types } from './index'
import axios from 'axios'

const getUserInfoSuccess = (data)=>{
    return {type: types.USER_INFO_SUCCESS, data}
}

export const userInfoAction = () => { 
    return (dispatch)=>{
        axios.get('/oapi/mainList.json').then((res)=>{
            dispatch(getUserInfoSuccess(res.data));
        })
    }
 }
 
export const detailContentAction = () => { }