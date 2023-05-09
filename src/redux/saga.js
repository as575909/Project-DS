import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { USER_LIST, userListSuccess, userListError } from './constant';

function* fetchUserList() {
  try {
    const response = yield call(axios.get, 'http://fakestoreapi.com/products');
    const userList = response.data;
    yield put(userListSuccess(userList));
  } catch (error) {
    yield put(userListError(error));
  }
}

function* SagaData() {
  yield takeEvery(USER_LIST, fetchUserList);
}

export default SagaData;
