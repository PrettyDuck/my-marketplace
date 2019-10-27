import { call, put, all, takeEvery } from 'redux-saga/effects'
import { getProductsReq } from '../../services/ProductService'
import { getProductsSuccess, productError } from '../../actions/ProductAction'
function* getProducts() {
    try {
        const data = yield call(getProductsReq);
        yield put(getProductsSuccess(data))
    } catch (error) {
        yield put(productError(error));
        console.log(error);
    }
}
export function* getProductsSaga() {
    yield all([
        takeEvery('GET_PRODUCTS_REQUEST', getProducts)
    ])
}