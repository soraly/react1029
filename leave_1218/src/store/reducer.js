import * as actions from './actionTypes'
const initState = {
    inputVal: '',
    username: ''
}
export default (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actions.INPUT_CHANGE:
            newState.inputVal = action.value
            break;
        case actions.BTN_SUBMIT:
            newState.inputVal = action.value
            break;
        case actions.GET_USER_SUCCESS:
            newState.username = action.data.data.realname;
            break;
        case actions.GET_USER_FAIL:
            newState.username = '未命名';
            break;
    }
    return newState
}