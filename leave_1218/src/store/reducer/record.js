import * as actions from '../actionTypes'
const initState = {
    list: []
}

export default (state = initState, action) => {
    var newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actions.GET_RECORD_LIST_SUCCESS:
                newState.list = action.data.data;
                newState.list.forEach(item=>{
                    item.leaveDate =
            window.utilities.getTime(item.starttime * 1000, "MM月dd日HH时mm分") +
            "—" +
            window.utilities.getTime(item.endtime * 1000, "MM月dd日HH时mm分");
                })
            break;
    }
    return newState
}