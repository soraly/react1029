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
    }
    return newState
}