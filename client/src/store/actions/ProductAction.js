import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_REQUEST,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT,
  PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS,
  FILTER_PRODUCTS_REQUEST,
  FILTER_PRODUCTS,
  FILTER_SEARCHED_PRODUCTS_REQUEST,
  FILTER_SEARCHED_PRODUCTS,
} from './types';

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};
export const getProductsSuccess = data => {
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
};
export const getSingleProductRequest = id => {
  return {
    type: GET_SINGLE_PRODUCT_REQUEST,
    payload: id,
  };
};
export const getSingleProductSuccess = data => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload: data,
  };
};
export const addProductRequest = formData => {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload: formData,
  };
};
export const addProductSuccess = formData => {
  return {
    type: ADD_PRODUCT,
    payload: formData,
  };
};
export const deleteProductRequest = data => {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: data,
  };
};
export const deleteProductSuccess = id => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const updateProductRequest = data => {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload: data,
  };
};
export const updateProductSuccess = data => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};
export const productError = error => {
  return {
    type: PRODUCT_ERROR,
    payload: error.response.data.msg,
  };
};
export const searchProductsRequest = data => {
  return {
    type: SEARCH_PRODUCTS_REQUEST,
    payload: data,
  };
};
export const searchProductsSuccess = data => {
  return {
    type: SEARCH_PRODUCTS,
    payload: data,
  };
};
export const filterProductsRequest = data => {
  return {
    type: FILTER_PRODUCTS_REQUEST,
    payload: data,
  };
};
export const filterProductsSuccess = data => {
  return {
    type: FILTER_PRODUCTS,
    payload: data,
  };
};
export const filterSearchedProductsRequest = data => {
  return {
    type: FILTER_SEARCHED_PRODUCTS_REQUEST,
    payload: data,
  };
};
export const filterSearchedProductsSuccess = data => {
  return {
    type: FILTER_SEARCHED_PRODUCTS,
    payload: data,
  };
};
