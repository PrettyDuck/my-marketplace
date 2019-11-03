import { call, put, all, takeEvery } from 'redux-saga/effects'
import { getProductsReq, getSingleProductReq, addProductReq, deleteProductReq, updateProductReq } from '../services/ProductService'
import { getProductsSuccess, getSingleProductSuccess, addProductSuccess, deleteProductSuccess, updateProductSuccess, productError } from '../actions/ProductAction'
import history from '../../history';
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
        yield put(addProductSuccess(data));
        history.push('/');
    } catch (error) {
        yield put(productError(error));
        console.log(error);
    }
}
function* deleteProduct(request) {
    try {
        console.log(request);
        yield call(deleteProductReq, request.payload);
        yield put(deleteProductSuccess(request.payload.id));
        history.push('/');
    } catch (error) {
        yield put(productError(error));
        console.log(error);
    }
}
function* updateProduct(request) {
    try {
        console.log(request);
        const data = yield call(updateProductReq, request.payload);
        console.log(data);
        yield put(updateProductSuccess(data));
        history.push('/');
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
        takeEvery('DELETE_PRODUCT_REQUEST', deleteProduct),
        takeEvery('UPDATE_PRODUCT_REQUEST', updateProduct)
    ])
}