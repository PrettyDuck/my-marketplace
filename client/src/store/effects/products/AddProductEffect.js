import { call, put, all, takeEvery } from 'redux-saga/effects'
import { addProductReq } from '../../services/ProductService'
import { addProductSuccess, productError } from '../../actions/ProductAction'
function* addProduct(request) {
    try {
        const data = yield call(addProductReq, request.payload);
        yield put(addProductSuccess(data))
    } catch (error) {
        yield put(productError(error))
        console.log(error);
    }
}
export function* addProductSaga() {
    yield all([
        takeEvery('ADD_PRODUCT_REQUEST', addProduct)
    ])
}