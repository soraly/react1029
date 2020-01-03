import { types } from './index'

const initState = {
    topicList: [],
    mainList: []
}
export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case types.TOPIC_LIST_SUCCESS:
            newState.topicList = action.data.data;
        break;
        case types.MAIN_LIST_SUCCESS:
            newState.mainList = action.data.data;
        break;
    }
    return newState
}