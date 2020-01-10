import { types } from './index'

const initState = {
    userInfo: {},
    articleHtml: ''
}
export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case types.USER_INFO_SUCCESS: 
            newState.userInfo = action.data.data;
        break;
        case types.GET_DETAIL_CONTENT: 
            newState.articleHtml = action.data.data.value;
        break;
    }
    return newState
}