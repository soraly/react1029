
import { getUser, sum } from './index'
import axios from 'axios'
import { delay, put, call } from 'redux-saga/effects'

test('ajax data name is xiang', () => {
  return axios.get('http://localhost:8989/userInfo').then(res => {
    expect(res.data.name).toBe('xiang');
  })
})

test('1+1=2', () => {
  expect(1).toBe(1)
})

test('1 plus 1 = 2', () => {
  expect(sum(1, 1)).toBe(2)
})

const gen = getUser();
test('async test delay', () => {
  expect(gen.next().value).toEqual(delay(100))
})
test('async test put an action', () => {
  expect(gen.next().value).toEqual(call(axios.get,'http://m.igrow.cn/api/1.1b/user/get?_relatedfields=school.*%2Croles%2Cschool.student.gradeid%2Cschool.student.classid%2Cschoolinfo.id%2Cschoolinfo.typeid%2Cschoolinfo.groupeduid'))
})


// test('incrementAsync Saga test', (assert) => {
//   const gen = getUser()

//   assert.deepEqual(
//     22,
//     22,
//     'incrementAsync Saga must call delay(1000)'
//   )

//   assert.end()
//   // now what ?
// });