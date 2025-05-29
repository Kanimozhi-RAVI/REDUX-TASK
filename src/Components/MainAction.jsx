
import { GETALL_USERDETAILE_FAILURE, GETALL_USERDETAILE_REQUEST, GETALL_USERDETAILE_SUCCESS } from "./Type"

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



