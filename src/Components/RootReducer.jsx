import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './MainReducer'; // or wherever your reducer is

const rootReducer = combineReducers({
  user: userReducer, // This is KEY!
});

export default rootReducer;
