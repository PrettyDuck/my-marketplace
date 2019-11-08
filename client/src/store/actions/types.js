export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ALERT_REQUEST = 'ALERT_REQUEST';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const storedState =
  window.localStorage.getItem('persisted-state') !== 'undefined'
    ? JSON.parse(window.localStorage.getItem('persisted-state'))
    : null;
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_SINGLE_PRODUCT_REQUEST = 'GET_SINGLE_PRODUCT_REQUEST';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';
export const PROCESS_FAVORITE_REQUEST = 'PROCESS_FAVORITE_REQUEST';
export const PROCESS_FAVORITE = 'PROCESS_FAVORITE';
