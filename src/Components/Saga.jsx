// Components/Saga/UserSaga.js

import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_LOGIN_REQUEST,
  GET_SIGNUP_DETAILS_REQUEST,
  GET_USERS_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../Components/Type";
import {
  getloginRequest,
  getloginFailure,
  getsignupdetailSuccess,
  getsignupdetailFailure,
  getUsersSuccess,
  getUsersFailure,
  updateUserSuccess,
  updateUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
  getloginSuccess,
} from "../Components/Actions/MainAction";
import axios from "axios";

const API_URL = "https://68382ddd2c55e01d184c471b.mockapi.io/users";

// Login saga: fetch all users, check credentials
function* fetchUsers(action) {
  try {
    const response = yield call(axios.get, API_URL);
    const data = response.data;

    const user = data.find(
      (u) =>
        u.email === action.payload.username &&
        u.password === action.payload.password
    );

    if (user) {
      // We can store the logged-in user too if needed
      yield put(getloginSuccess(data));
    } else {
      yield put(getloginFailure("Invalid Credentials"));
    }
  } catch (e) {
    yield put(getloginFailure(e.message));
  }
}

// Signup saga: add new user
function* signupUser(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(getsignupdetailSuccess(response.data));
  } catch (e) {
    yield put(getsignupdetailFailure(e.message));
  }
}

// Fetch all users saga
function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure("Failed to fetch users"));
  }
}

// Update user saga
function* updateUserSaga(action) {
  try {
    const { id, ...rest } = action.payload;
    const response = yield call(axios.put, `${API_URL}/${id}`, rest);
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}


function* deleteUserSaga(action) {
  try {
    const id = action.payload;
    yield call(axios.delete, `${API_URL}/${id}`);
    yield put(deleteUserSuccess(id));
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}


export function* userSaga() {
  yield takeLatest(GET_LOGIN_REQUEST, fetchUsers);
  yield takeLatest(GET_SIGNUP_DETAILS_REQUEST, signupUser);
  yield takeLatest(GET_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);  // <--- Add this line
}
