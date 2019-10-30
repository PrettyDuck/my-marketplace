import { ADD_PRODUCT_REQUEST, ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT, PRODUCT_ERROR } from './types';

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
export const getSingleProductRequest = id => {
    return {
        type: GET_SINGLE_PRODUCT_REQUEST,
        payload: id
    }
}
export const getSingleProductSuccess = data => {
    return {
        type: GET_SINGLE_PRODUCT,
        payload: data
    }
}
export const addProductRequest = formData => {
    return {
        type: ADD_PRODUCT_REQUEST,
        payload: formData
    }
}
export const addProductSuccess = formData => {
    return {
        type: ADD_PRODUCT,
        payload: formData
    }
}
export const productError = error => {
    return {
        type: PRODUCT_ERROR,
        payload: error.response.data.msg
    }
}