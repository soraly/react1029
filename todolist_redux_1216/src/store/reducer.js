import { INPUT_CHANGE, SUBMIT, DELETE, INIT_LIST_ACTION, USER_INFO_ACTION,
    USER_INFO_SUCCEEDED } from '../actionTypes'
const initState = {
    inputVal: '',
    name: '',
    listData: []
}
export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_CHANGE:
            newState.inputVal = action.value;
            break;
        case SUBMIT:
            newState.listData.push(newState.inputVal);
            newState.inputVal = '';
            break;
        case DELETE:
            newState.listData.splice(action.index, 1);
            break;
        case INIT_LIST_ACTION:
            newState.listData = action.listData;
            break;
        case USER_INFO_ACTION:
            newState.name = action.data.name;
            break;
        case USER_INFO_SUCCEEDED:
            console.log(action.data,'actionactionaction')
            break;
    }
    return newState
}