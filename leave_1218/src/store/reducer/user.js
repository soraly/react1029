
import * as actions from '../actionTypes'
const initState = {
    IGrow: {},
    username: ''
}

export default (state = initState, action, what) => {
    var newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actions.GET_USER_SUCCESS:
                newState.IGrow.user = action.data[0].data.data;
                newState.IGrow.school = action.data[1].data.data;
            break;
        case actions.SET_USER_NAME:
                newState.username = newState.IGrow.user.realname;
            break;
    }
    return newState
}