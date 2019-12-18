import { INPUT_CHANGE, BTN_SUBMIT } from './actionTypes'
const initState = {
    inputVal: ''
}
export default (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_CHANGE:
            newState.inputVal = action.value
            break;
        case BTN_SUBMIT:
            newState.inputVal = action.value
            break;
    }
    return newState
}