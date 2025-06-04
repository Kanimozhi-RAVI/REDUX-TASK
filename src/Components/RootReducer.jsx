import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './MainReducer'; 

const rootReducer = combineReducers({
  userData: userReducer,
});

export default rootReducer;
