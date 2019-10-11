import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from './types';
import axios from 'axios'
export const register = async formData => async dispatch => 
{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/users',formData,config);
        dispatch({
            type: REGISTER_SUCCESS,
            paload: res.data
        })
    }
}