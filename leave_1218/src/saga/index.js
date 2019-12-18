import axios from 'axios'
import { GET_USER, GET_SCHOOL } from '../store/actionTypes'
import { } from '../store/actionCreator'
import { takeEvery, put, all, delay } from 'redux-saga/effects'

export function* getUser(params) {
    yield delay(3000);
    yield put({type: 'XIXIHAHA'});
    return 'done..'
    // const res = yield axios.get('http://m.igrow.cn/api/1.1b/user/get?_relatedfields=school.*%2Croles%2Cschool.student.gradeid%2Cschool.student.classid%2Cschoolinfo.id%2Cschoolinfo.typeid%2Cschoolinfo.groupeduid');
    // console.log(res);
}
var gen = getUser();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
function* getSchool(params) {
    yield delay(3000);
    const res = yield axios.get(' http://m.igrow.cn/api/1.1b/school/get?_fields=id%2Cname%2Cgroupid%2Ctypeid%2Cshortname%2Csemesterid%2Cnumber&_relatedfields=transferstate.*');
    console.log(res);
}

function* setUser() {
    yield takeEvery(GET_USER, getUser);
}
function* setSchool() {
    yield takeEvery(GET_SCHOOL, getSchool);
}

function* rootSaga() {
    yield all([setUser(), setSchool()]);
}
export default rootSaga