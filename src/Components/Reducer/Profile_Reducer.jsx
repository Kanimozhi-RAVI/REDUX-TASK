// import {
//   GET_USERS_REQUEST,
//   GET_USERS_SUCCESS,
//   GET_USERS_FAILURE
// } from "../Type";

// const initialState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// const userReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USERS_REQUEST:
//       return { ...state, loading: true, error: null };

//     case GET_USERS_SUCCESS:
//       return { ...state, loading: false, users: action.payload };

//     case GET_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default userReducers;
