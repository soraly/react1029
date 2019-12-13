import { INPUT_CHANGE, CHECKBOX_CHANGE } from './actionTypes'

const defaultState = {
    filterText: '',
    inStockOnly: false
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case INPUT_CHANGE:
            newState.filterText = action.value;
            break;
        case CHECKBOX_CHANGE:
            newState.inStockOnly = action.value;
            break;
        default:
            return newState
    }
    return newState
}