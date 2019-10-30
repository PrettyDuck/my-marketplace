import { ADD_PRODUCT, GET_PRODUCTS, PRODUCT_ERROR,GET_SINGLE_PRODUCT, storedState } from '../actions/types';
const initialState = storedState !== null ? storedState.products : {
    products: null,
    currentProduct: null,
    productError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_SINGLE_PRODUCT:
            return{
                ...state,
                currentProduct: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                productError: action.payload
            }
        default: return state;
    }
}