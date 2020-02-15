const initState = {
    test: 123
}
export default (state = initState,action)=>{
    var newState = JSON.parse(JSON.stringify(state));
    return newState
}