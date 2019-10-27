import { all, fork } from 'redux-saga/effects';
import { loginSaga } from './auth/LoginEffect';
import { registerSaga } from './auth/RegisterEffect';
import { alertSaga } from './alerts/AlertEffect';
import { getProductsSaga } from './products/GetProductsEffect';
import { addProductSaga } from './products/AddProductEffect';
import { statePersistSaga } from './StatePersistEffect';

export default function* rootSaga() {
    yield all([
        fork(alertSaga),
        fork(registerSaga),
        fork(loginSaga),
        fork(getProductsSaga),
        fork(addProductSaga),
        fork(statePersistSaga)
    ]);
}