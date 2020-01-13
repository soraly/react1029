import axios from 'axios'
import { types } from './index'

const change_login = () => ({
    type: types.CHANGE_LOGIN
})

export const login = (num, psd) => {
    return (dispatch) => {
        axios.get('/oapi/login.json', {
            params: {
                tel: num,
                psd
            }
        }).then(res => {
            if (res.data.data) {
                dispatch(change_login())
            }
        });
    }
}