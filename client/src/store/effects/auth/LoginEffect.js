import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loginSuccess, loginFail, logout, loadUser, loadUserFail } from '../../actions/AuthAction';
import { loadUserAuth, loginAuth } from '../../services/AuthService'

function* login(request) {
    try {
        const data = yield call(loginAuth, request.payload);
        yield put(loginSuccess(data));
        try {
            const userData = yield call(loadUserAuth, request.payload);
            yield put(loadUser(userData));
        } catch (error) {
            yield put(loadUserFail(error));
        }
    }
    catch (error) {
        yield put(loginFail(error));
        yield put(logout());
        console.log(error);
    }
}
export function* loginSaga() {
    yield all([
        takeEvery('LOGIN_REQUEST', login)
    ])
}