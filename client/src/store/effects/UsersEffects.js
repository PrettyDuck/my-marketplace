import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  logout,
  loadUser,
  loadUserFail,
} from '../actions/AuthAction';
import { loadUserAuth, registerAuth, loginAuth } from '../services/AuthService';

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
  } catch (error) {
    yield put(registerFail(error));
    console.log(error);
  }
}

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
  } catch (error) {
    yield put(loginFail(error));
    yield put(logout());
    console.log(error);
  }
}
export function* usersSaga() {
  yield all([takeEvery('REGISTER_REQUEST', register), takeEvery('LOGIN_REQUEST', login)]);
}
