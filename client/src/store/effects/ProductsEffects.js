import { call, put, all, takeEvery } from 'redux-saga/effects'
import { getProductsReq, getSingleProductReq, addProductReq, deleteProductReq } from '../services/ProductService'
import { getProductsSuccess, getSingleProductSuccess, addProductSuccess, deleteProductSuccess, productError } from '../actions/ProductAction'
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
        console.log(request.payload);
        const data = yield call(addProductReq, request.payload);
        console.log(data);
        yield put(addProductSuccess(data))
    } catch (error) {
        yield put(productError(error))
        console.log(error);
    }
}
function* deleteProduct(request) {
    try {
        console.log(request);
        yield call(deleteProductReq, request.payload);
        yield put(deleteProductSuccess(request));
    } catch (error) {
        yield put(productError(error));
        console.log(error);
    }
}
export function* productsSaga() {
    yield all([
        takeEvery('GET_PRODUCTS_REQUEST', getProducts),
        takeEvery('GET_SINGLE_PRODUCT_REQUEST', getSingleProduct),
        takeEvery('ADD_PRODUCT_REQUEST', addProduct),
        takeEvery('DELETE_PRODUCT_REQUEST', deleteProduct)
    ])
}