import { GET_SIGNUP_DETAILS_REQUEST,GET_SIGNUP_DETAILS_SUCCESS,GET_SIGNUP_DETAILS_FAILURE } from "../Type";

const initialState = {
users: [],
loading:false,
error:null,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SIGNUP_DETAILS_REQUEST:
    return {
        ...state,
        loading:true,
        error:null,
    };
    case GET_SIGNUP_DETAILS_SUCCESS:
        return {
            ...state,
            loading:false,
           users:action.payload,
        };
        case GET_SIGNUP_DETAILS_FAILURE:
            return{
            ...state,
            loading:false,
            error:action.payload,
            };
            default:
                return state;
  }


};
export default userReducer;