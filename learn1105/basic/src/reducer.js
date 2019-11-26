export default (state={time: 0},actions)=>{
    switch (actions.type){
        case 'add':
            state.time++;
            break;
        case 'decrease':
            state.time-- ;   
            break;
    }
    return state
}