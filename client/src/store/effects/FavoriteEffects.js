import { put, all, takeEvery } from 'redux-saga/effects';
import { processFavoriteSuccess } from '../actions/FavoriteAction';

function* processFavorite(request) {
  try {
    console.log(request.payload);
    yield put(processFavoriteSuccess(request.payload));
  } catch (error) {
    console.log(error);
  }
}
export function* favoriteSaga() {
  yield all([takeEvery('PROCESS_FAVORITE_REQUEST', processFavorite)]);
}
