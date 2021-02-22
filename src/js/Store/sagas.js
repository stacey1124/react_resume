import { put, takeEvery } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getList_action } from './actionCreators'
import axios from 'axios'
function* mySaga() {
  //等待GET_MY_LIST的action执行，
  yield takeEvery(GET_MY_LIST, getList)
}
function* getList() {
  //在此方法中写业务逻辑
  // axios.get('http://127.0.0.1:8080/mock/11/api/stacey/getList').then((res) => {
  //   console.log('res::', res);
  //   const data = res.data
  //   const action = getList_action(data)
  //   // store.dispatch(action)
  //   put(action)
  // })
  const res = yield axios.get('http://127.0.0.1:8080/mock/11/api/stacey/getList')
  const action = getList_action(res.data)
  yield put(action)
}
export default mySaga