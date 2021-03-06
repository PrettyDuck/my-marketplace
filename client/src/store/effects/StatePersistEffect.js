/* SAGA FOR SAVING STATE IN LOCAL STORAGE */
import { select, takeEvery, call, all } from 'redux-saga/effects';

const identify = action => {
  return action;
};

const save = state => window.localStorage.setItem('persisted-state', JSON.stringify(state));

function* persistState() {
  const state = yield select(identify);
  yield call(save, state);
}

export function* statePersistSaga() {
  yield all([
    takeEvery(
      [
        'REGISTER_REQUEST',
        'REGISTER_SUCCESS',
        'REGISTER_FAIL',
        'LOGIN_REQUEST',
        'LOGIN_SUCCESS',
        'LOGIN_FAIL',
        'LOGOUT',
        'USER_LOADED',
        'AUTH_ERROR',
        'CLEAR_ERRORS',
        'ALERT_REQUEST',
        'SET_ALERT',
        'REMOVE_ALERT',
        'ADD_PRODUCT_REQUEST',
        'ADD_PRODUCT',
        'GET_PRODUCTS_REQUEST',
        'GET_PRODUCTS',
        'GET_SINGLE_PRODUCT_REQUEST',
        'GET_SINGLE_PRODUCT',
        'DELETE_PRODUCT_REQUEST',
        'DELETE_PRODUCT',
        'UPDATE_PRODUCT_REQUEST',
        'UPDATE_PRODUCT',
        'PRODUCT_ERROR',
        'PROCESS_FAVORITE_REQUEST',
        'PROCESS_FAVORITE',
        'SEARCH_PRODUCTS_REQUEST',
        'SEARCH_PRODUCTS',
        'FILTER_PRODUCTS_REQUEST',
        'FILTER_PRODUCTS',
      ],
      persistState,
    ),
  ]);
}
