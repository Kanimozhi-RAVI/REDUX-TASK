
import { GETALL_USERDETAILE_FAILURE, GETALL_USERDETAILE_REQUEST, GETALL_USERDETAILE_SUCCESS, GET_SIGNUP_DETAILS_REQUEST,GET_SIGNUP_DETAILS_SUCCESS, GET_SIGNUP_DETAILS_FAILURE } from "../Type"

export const getalluserdetailRequest = (payload) => ({
    type:GETALL_USERDETAILE_REQUEST,
    payload,

});
export const getalluserdetailSuccess = (users) => ({
    type: GETALL_USERDETAILE_SUCCESS,
    payload:users,
});
export const getalluserdetailFailure = (error) => ({
 type: GETALL_USERDETAILE_FAILURE,
 payload:error,
});

//Sign up Action
export const getsignupdetailRequest = (payload) => ({
    type:getalluserdetailRequest,
    payload,
});
export const getsignupdetailSuccess = (user) => ({
    type:getalluserdetailRequest,
    payload:user,
});
export const getsignupdetailFailure = (error) => ({
    type:getalluserdetailRequest,
    payload:error,
});

