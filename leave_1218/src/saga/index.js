import axios from 'axios'
import * as actions from '../store/actionTypes'
import { } from '../store/actionCreator'
import { takeEvery, put, all, delay, call, select } from 'redux-saga/effects'
import store from '../store/store'

export function* getUser() {
    //yield delay(100);
    try {
        const res = yield all([
            call(axios.get, 'http://m.igrow.cn/api/1.1b/user/get?_relatedfields=school.*%2Croles%2Cschool.student.gradeid%2Cschool.student.classid%2Cschoolinfo.id%2Cschoolinfo.typeid%2Cschoolinfo.groupeduid'),
            call(axios.get, 'http://m.igrow.cn/api/1.1b/school/get?_fields=id%2Cname%2Cgroupid%2Ctypeid%2Cshortname%2Csemesterid%2Cnumber&_relatedfields=transferstate.*'),
        ])
        yield put({ type: actions.GET_USER_SUCCESS, data: res });
        yield* getData();
    } catch (error) {
        yield put({ type: actions.GET_USER_FAIL, error })
    }
}

function* getData(params) {
    yield put({ type: actions.SET_USER_NAME })
    yield put({ type: actions.GET_ABSENT_TYPES })
    yield put({ type: actions.GET_RECORD_LIST })
}

export function sum(a, b) {
    return a + b
}

function* watchLog() {
    yield takeEvery('*', function* logger() {
        const state = yield select();
    })
}

function* getSchool() {
    console.log('getschool')
    const res = yield axios.get('http://m.igrow.cn/api/1.1b/school/get?_fields=id%2Cname%2Cgroupid%2Ctypeid%2Cshortname%2Csemesterid%2Cnumber&_relatedfields=transferstate.*');
    yield put({ type: actions.GET_SCHOOL_SUCCESS, data: res.data })
}

function* getAbsentTypes() {
    var schoolid = store.getState().user.IGrow.school.id;
    var res = yield call(axios.get, 'http://m.igrow.cn/api/1.1b/yo/absent/type/list?schoolid='+schoolid)
}

function* getRecordList() {
    var schoolid = store.getState().user.IGrow.school.id;
    var url = `http://m.igrow.cn/api/1.1b/yo/teacher/absent/list?schoolid=${schoolid}&isblur=1&_relatedfields=type.name%2Cteacher.name%2Cteacherprocess.*&_page=1&_pagesize=10`
    var res = yield call(axios.get, url);
    yield put({type: actions.GET_RECORD_LIST_SUCCESS, data: res.data})
}

function* setUser() {
    yield takeEvery(actions.GET_USER, getUser);
}
function* setSchool() {
    yield takeEvery(actions.GET_SCHOOL, getSchool);
}
function* setAbsentTypes() {
    yield takeEvery(actions.GET_ABSENT_TYPES, getAbsentTypes);
}
function* setRecords() {
    yield takeEvery(actions.GET_RECORD_LIST, getRecordList);
}

function* rootSaga() {
    yield all([setUser(), watchLog(),setAbsentTypes(),setRecords()]);
}
export default rootSaga