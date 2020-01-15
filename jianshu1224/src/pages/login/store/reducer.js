import { types } from './index'

const initState = {
    isLogin: false
}
export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case types.CHANGE_LOGIN:
            newState.isLogin = true;
        break;
        case types.CHANGE_LOGOUT:
            newState.isLogin = false;
        break;
        case types.WRITER_LIST_SUCCESS:
            newState.writerList = action.data.data;
        break;
    }
    return newState
}