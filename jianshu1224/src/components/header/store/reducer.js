import { types } from './index'

const initState = {
    focused: false
}

//此处可以引用immutable确保state不会改变，state.set(xxx)可以返回一个全新的对象。但是使用成本大，懒得用。
export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case types.INPUT_FOCUS:
            newState.focused = true;
            break;
        case types.INPUT_BLUR:
            newState.focused = false;
            break;
        default:

    }
    return newState
}