import {all,fork} from 'redux-saga/effects';
import {loginSaga} from './LoginEffect';
import {registerSaga} from './RegisterEffect';
import {alertSaga} from './AlertEffect';
import {persistSaga} from './persist'

export default function* rootSaga(){
    yield all ([
        fork(alertSaga),
        fork(registerSaga),
        fork(loginSaga),
        fork(persistSaga)
    ]);
}