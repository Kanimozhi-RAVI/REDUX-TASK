import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './MainReducer'; 

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
