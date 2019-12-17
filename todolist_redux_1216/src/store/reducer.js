import {INPUT_CHANGE, SUBMIT, DELETE} from '../actionTypes'
const initState = {
    inputVal: '',
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
            newState.listData.splice(action.index,1);
            break;
    }
    return newState
}