import { all } from 'redux-saga/effects';
import  { userSaga } from './Saga';

export default function* rootSaga() {
  yield all([
    userSaga()
  ]);
};
