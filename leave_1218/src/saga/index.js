import axios from 'axios'
import * as actions from '../store/actionTypes'
import { } from '../store/actionCreator'
import { takeEvery, put, all, delay, call } from 'redux-saga/effects'

export function* getUser() {
    //yield delay(100);
    console.log('getuser')
    try {
        console.log('getuser again')
        const res = yield call(axios.get, 'http://m.igrow.cn/api/1.1b/user/get?_relatedfields=school.*%2Croles%2Cschool.student.gradeid%2Cschool.student.classid%2Cschoolinfo.id%2Cschoolinfo.typeid%2Cschoolinfo.groupeduid');
        yield put({ type: actions.GET_USER_SUCCESS, data: res.data })

    } catch (error) {
        console.log(error,'error')
        yield put({type: actions.GET_USER_FAIL,error})
    }

}

export function sum(a, b) {
    return a + b
}

function* getSchool(params) {
    console.log('getschool')
    const res = yield axios.get('http://m.igrow.cn/api/1.1b/school/get?_fields=id%2Cname%2Cgroupid%2Ctypeid%2Cshortname%2Csemesterid%2Cnumber&_relatedfields=transferstate.*');

}

function* setUser() {
    yield takeEvery(actions.GET_USER, getUser);
}
function* setSchool() {
    //yield takeEvery(actions.GET_SCHOOL, getSchool);
}

function* rootSaga() {
    yield all([setUser(), setSchool()]);
}
export default rootSaga