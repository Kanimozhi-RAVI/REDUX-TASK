import { call, put,takeEvery } from 'redux-saga/effects';
import { GETALL_USERDETAILE_REQUEST,GETALL_USERDETAILE_SUCCESS,GETALL_USERDETAILE_FAILURE } from './Type';
const API_URL = 'https://68382ddd2c55e01d184c471b.mockapi.io/users';


function* fetchuser() {
    try{
        const res = yield call (fetch,API_URL,{
          method:'GET',
          headers: { 'Content-Type': 'application/json' },
           
          
        });
        const data = yield res.json();
        yield put({ type: GETALL_USERDETAILE_SUCCESS, payload: data });


    } catch (error) {
    yield put({ type: GETALL_USERDETAILE_FAILURE, payload: error.message });
  }
}

function* userSaga() {
  yield takeEvery(GETALL_USERDETAILE_REQUEST, fetchuser);
}

export default userSaga;

