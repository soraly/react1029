import {types} from './index'

const initState = {
    titleList: [
        'fenfen','xiang','xiaomi'
    ]
}

export default (state=initState, action)=>{
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case types.LEVEL:
            console.log(action.data);
            break;
        default:
            
    }
    return newState 
}