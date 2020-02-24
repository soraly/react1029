const initState = {
    list: ['fenfen', 'xiang'],
    inputVal:''
}

export default (state = initState, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case 'ADD':
            newState.list.push(action.value);
            newState.inputVal = '';
        break;  
        case 'DELETE':
            newState.list.splice(action.index, 1);
        break;  
        case 'UPDATE':
            newState.list[action.value.index] = action.value.value;
            console.log(newState.list,'newState.list')
        break;  
        default:
    }
    return newState
}