import { all, call, put, takeEvery } from 'redux-saga/effects';
import { registerSuccess, registerFail, loadUser, loadUserFail } from '../actions/AuthAction';
import { registerAuth, loadUserAuth } from '../services/AuthService'

function* register(request) {
    try {
        const data = yield call(registerAuth, request.payload);
        yield put(registerSuccess(data));
        try {
            const userData = yield call(loadUserAuth, request.payload);
            yield put(loadUser(userData));
        } catch (error) {
            yield put(loadUserFail(error));
        }
    }
    catch (error) {
        yield put(registerFail(error));
        console.log(error);
    }
}
export function* registerSaga(){
    yield all([
        takeEvery('REGISTER_REQUEST',register)
    ])
}