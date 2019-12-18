import {put,takeEvery} from 'redux-saga/effects'
import {USER_INFO_REQUESTED} from '../actionTypes';
import {userInfoSuccessAction} from '../createActions';
import axios from 'axios'

function* getUserInfo(params) {
    const res = yield axios.get('http://m.igrow.cn/api/1.1b/yo/absent/type/list?schoolid=407');
    const action = userInfoSuccessAction(res.data);
    yield put(action)
}

function* lzxSaga(params) {
    yield takeEvery(USER_INFO_REQUESTED, getUserInfo);
}
export default lzxSaga