import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = {
    alertsArray: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alertsArray: [...state.alertsArray, action.payload]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alertsArray: state.alertsArray.filter(alert => alert.id !== action.payload)
            }
        default: return state;
    }
}