import { ADD_PRODUCT_REQUEST, ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_REQUEST, PRODUCT_ERROR } from './types';

export const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}
export const getProductsSuccess = data => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
export const addProductRequest = formData => {
    console.log('gddgdg')
    return {
        type: ADD_PRODUCT_REQUEST,
        payload: formData
    }
}
export const addProductSuccess = formData => {
    console.log('tewetw');
    return {
        type: ADD_PRODUCT,
        payload: formData
    }
}
export const productError = error => {
    return {
        type: PRODUCT_ERROR,
        payload: error
    }
}