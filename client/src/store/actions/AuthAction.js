import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGIN_FAIL, LOGOUT, USER_LOADED, AUTH_ERROR, CLEAR_ERRORS,
} from './types';


export const registerRequest = formData => {
    return {
        type: REGISTER_REQUEST,
        payload: formData
    };
};
export const registerSuccess = data => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    };
};
export const registerFail = error => {
    return {
        type: REGISTER_FAIL,
        payload: error.response.data.msg
    };
};
export const loginRequest = formData => {
    return {
        type: LOGIN_REQUEST,
        payload: formData
    };
};
export const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
};
export const loginFail = error => {
    return {
        type: LOGIN_FAIL,
        payload: error.response.data.msg
    };
};
export const logout = () => {
    return {
        type: LOGOUT
    };
};
export const loadUser = data => {
    return {
        type: USER_LOADED,
        payload: data
    };
};
export const loadUserFail = error => {
    return {
        type: AUTH_ERROR,
        payload: error.response.data.msg
    };
};
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};