import {SUBMIT,DELETE,CLEAR,CHANGE} from './actionTypes'
const defaultState = { inputVal: '', listContent: [] }

//reducer输出一个纯函数，指给固定的输入，就有固定的输出，而且不会有任何副作用（对输入参数不会修改）。有ajax。setTimeout newDate这些就不行
export default (state = defaultState, action) => {
    //reducer可以接收state，但是决不能修改state
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case SUBMIT:
            newState.listContent.push(state.inputVal)
            break;
        case CHANGE:
            newState.inputVal = action.value;
            break;
        case CLEAR:
            newState.inputVal = '';
            break;
        case DELETE:
            newState.listContent.splice(action.value, 1);
            break;
    }
    
    return newState
}