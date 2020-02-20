import axios from 'axios'
import {types} from './index'

export const getTitleList = (id)=>{
    return (dispatch)=>{
        axios.get('http://localhost:8989/getList?id='+id).then(res=>{
            dispatch({type: types.LEVEL, data: res.data})
        })
    }
}