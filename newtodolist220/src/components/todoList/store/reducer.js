import * as types from './actionType'
const initState = {
    list: ['fenfen', 'xiang'],
    inputVal:''
}

export default (state = initState, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case types.ADD:
            newState.list.push(action.value);
            newState.inputVal = '';
        break;  
        case types.DELETE:
            newState.list.splice(action.index, 1);
        break;  
        case types.UPDATE:
            newState.list[action.value.index] = action.value.value;
        break;  
        case types.GET_LIST_DONE:
            newState.list = action.value;
        break;  
        default:
    }
    return newState
}