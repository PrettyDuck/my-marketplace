import { all, put, takeEvery } from 'redux-saga/effects';
import { setAlert, removeAlert } from '../../actions/AlertAction';

const delay = (timeout) => new Promise(res => setTimeout(res, timeout));
function* alert(request) {
    yield put(setAlert(request.payload));
    yield delay(5000);
    yield put(removeAlert());
}
export function* alertSaga() {
    yield all([
        takeEvery('ALERT_REQUEST', alert)
    ])
}