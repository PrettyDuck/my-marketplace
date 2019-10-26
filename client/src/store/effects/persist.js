import { select, takeEvery,call,all } from 'redux-saga/effects';
const identify = (action) => { 
   
    return action }

const save = state => window.localStorage.setItem('persisted-state', JSON.stringify(state));

function* persistState() {
    const state = yield select(identify)
    yield call(save, state)
}

export function* persistSaga() {
    yield all([
        takeEvery([  'REGISTER_REQUEST', 'REGISTER_SUCCESS', 'REGISTER_FAIL', 'LOGIN_REQUEST', 'LOGIN_SUCCESS',
            'LOGIN_FAIL', 'LOGOUT', 'USER_LOADED', 'AUTH_ERROR', 'CLEAR_ERRORS','ALERT_REQUEST', 'SET_ALERT', 'REMOVE_ALERT' ], persistState)
    ])
}