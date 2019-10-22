import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGIN_FAIL, LOGOUT, USER_LOADED, AUTH_ERROR, CLEAR_ERRORS,
} from '../actions/types';
const initialState = {
    token: localStorage.getItem('token'),
    loading: false,
    user: null,
    isAuthenticated: false,
    error: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
            return{
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            {
                localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading: false,
                    user: null,
                    error: action.payload
                }
            }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null
            }
        }
        default: return state;
    }
}