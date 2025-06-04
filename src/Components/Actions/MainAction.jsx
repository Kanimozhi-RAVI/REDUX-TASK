// Actions.js
import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  
  GET_SIGNUP_DETAILS_REQUEST,
  GET_SIGNUP_DETAILS_SUCCESS,
  GET_SIGNUP_DETAILS_FAILURE,

  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,

  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from "../Type";

// Components/Actions/MainAction.js

// Login
export const getloginRequest = (payload) => ({
  type: GET_LOGIN_REQUEST,
  payload,
});
export const getloginSuccess = (payload) => ({
  type: GET_LOGIN_SUCCESS,
  payload,
});
export const getloginFailure = (payload) => ({
  type: GET_LOGIN_FAILURE,
  payload,
});

// Signup
export const getsignupdetailRequest = (payload) => ({
  type: GET_SIGNUP_DETAILS_REQUEST,
  payload,
});
export const getsignupdetailSuccess = (payload) => ({
  type: GET_SIGNUP_DETAILS_SUCCESS,
  payload,
});
export const getsignupdetailFailure = (payload) => ({
  type: GET_SIGNUP_DETAILS_FAILURE,
  payload,
});

// Get all users
export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});
export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});
export const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});

// Update user
export const updateUserRequest = (payload) => ({
  type: UPDATE_USER_REQUEST,
  payload,
});
export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});
export const updateUserFailure = (payload) => ({
  type: UPDATE_USER_FAILURE,
  payload,
});

// Delete user actions
export const deleteUserRequest = (id) => ({
  type: DELETE_USER_REQUEST,
  payload: id,
});

export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});




