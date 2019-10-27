import { ALERT_REQUEST, SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid'

export const alertRequest = msg => {
    return {
        type: ALERT_REQUEST,
        payload: msg 
    };
};
const id = uuid.v4();
export const setAlert = msg => {
    return {
        type: SET_ALERT,
        payload: { msg,id }
    };
}
export const removeAlert = () => {
    return {
        type: REMOVE_ALERT,
        payload: id
    };
}
