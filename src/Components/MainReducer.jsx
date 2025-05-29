import { GETALL_USERDETAILE_FAILURE, GETALL_USERDETAILE_REQUEST, GETALL_USERDETAILE_SUCCESS } from "./Type";

const initialState = {
users: [],
loading:false,
error:null,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETALL_USERDETAILE_REQUEST:
    return {
        ...state,
        loading:true,
        error:null,
    };
    case GETALL_USERDETAILE_SUCCESS:
        return {
            ...state,
            loading:false,
           users:action.payload,
        };
        case GETALL_USERDETAILE_FAILURE:
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