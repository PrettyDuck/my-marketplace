import { call, put, all, takeEvery } from 'redux-saga/effects'
import { getProductsReq, getSingleProductReq, addProductReq } from '../services/ProductService'
import { getProductsSuccess, getSingleProductSuccess, addProductSuccess, productError } from '../actions/ProductAction'
function* getProducts() {
    try {
        const data = yield call(getProductsReq);
        yield put(getProductsSuccess(data))
    } catch (error) {
        yield put(productError(error));
        console.log(error);
    }
}
function* getSingleProduct(request) {
    try {
        const data = yield call(getSingleProductReq, request.payload);
        yield put(getSingleProductSuccess(data));
    } catch (error) {
        yield put(productError(error));
        console.log(error);
    }
}
function* addProduct(request) {
    try {
        const data = yield call(addProductReq, request.payload);
        yield put(addProductSuccess(data))
    } catch (error) {
        yield put(productError(error))
        console.log(error);
    }
}
export function* productsSaga() {
    yield all([
        takeEvery('GET_PRODUCTS_REQUEST', getProducts),
        takeEvery('GET_SINGLE_PRODUCT_REQUEST', getSingleProduct),
        takeEvery('ADD_PRODUCT_REQUEST', addProduct)
    ])
}