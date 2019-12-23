import { combineReducers } from 'redux'
import * as actions from './actionTypes'
import record from './reducer/record'
import user from './reducer/user'
const initState = {
    inputVal: '',
    username: ''
}
const baseReducer = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actions.INPUT_CHANGE:
            newState.inputVal = action.value
            break;
        case actions.BTN_SUBMIT:
            newState.inputVal = action.value
            break;
        case actions.GET_SCHOOL_SUCCESS:
            window.IGrow.school = action.data.data;
            break;
        case actions.GET_USER_FAIL:
            console.log(action.error,'error')
            newState.username = '未命名';
            break;
    }
    return newState
}
export default combineReducers({ baseReducer, record, user });