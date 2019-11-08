import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './UsersEffects';
import { alertsSaga } from './AlertsEffects';
import { productsSaga } from './ProductsEffects';
import { statePersistSaga } from './StatePersistEffect';
import { favoriteSaga } from './FavoriteEffects';

export default function* rootSaga() {
  yield all([
    fork(alertsSaga),
    fork(usersSaga),
    fork(productsSaga),
    fork(favoriteSaga),
    fork(statePersistSaga),
  ]);
}
