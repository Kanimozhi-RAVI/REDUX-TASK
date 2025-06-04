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
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST
} from "../Type";

const initialState = {
  users: [],           // all users
  loading: false,
  error: null,
  signupSuccess: false,
  loginUser: null,     // user object when logged in
  updateSuccess: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case GET_LOGIN_REQUEST:
      return { ...state, loading: true, error: null, loginUser: null };
    case GET_LOGIN_SUCCESS:
      return { ...state, loading: false, users: action.payload, loginUser: action.payload.find(u => u.email === state.loginUser?.email) || null };
    case GET_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload, loginUser: null };

    // SIGNUP
    case GET_SIGNUP_DETAILS_REQUEST:
      return { ...state, loading: true, error: null, signupSuccess: false };
    case GET_SIGNUP_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
        signupSuccess: true,
      };
    case GET_SIGNUP_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload, signupSuccess: false };

    // FETCH USERS
    case GET_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case GET_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // UPDATE USER
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null, updateSuccess: false };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        updateSuccess: true,
      };
    case UPDATE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload, updateSuccess: false };


///delete
    case DELETE_USER_SUCCESS:
  return {
    ...state,
    loading: false,
    users: state.users.filter(user => user.id !== action.payload),
  };

    case DELETE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };


   case DELETE_USER_REQUEST:
  return { ...state, loading: true, error: null };
case DELETE_USER_SUCCESS:
  return {
    ...state,
    loading: false,
    users: state.users.filter(user => user.id !== action.payload),
  };
case DELETE_USER_FAILURE:
  return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
