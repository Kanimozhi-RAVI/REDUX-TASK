import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './MainReducer';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userData: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
