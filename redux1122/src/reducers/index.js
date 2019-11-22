export default (state = 0, actions) => {
    switch (actions.type) {
        case 'addFood':
            return state + 'food'
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'addNum':
            return state + '1000'
        default:
            return state
    }

}