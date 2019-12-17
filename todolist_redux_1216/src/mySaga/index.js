import {call, put,takeEvery,takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* getListData(params) {
    const res = yield axios.get('http://localhost:8989/userInfo');
    yield put({type: "GET_DATA_SUCCESS",data:res.data})
}

function* lzxSaga(params) {
    yield takeEvery("GET_List_DATA", getListData);
}
export default lzxSaga