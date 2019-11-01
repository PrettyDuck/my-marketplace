import { ADD_PRODUCT, GET_PRODUCTS, PRODUCT_ERROR,GET_SINGLE_PRODUCT,DELETE_PRODUCT, storedState } from '../actions/types';
const initialState = storedState !== null ? storedState.products : {
    products: null,
    currentProduct: null,
    productError: null,
    productProcessing: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                currentProduct: null,
                productProcessing: false,
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
        case DELETE_PRODUCT:
            return{
                ...state,
                currentProduct: null,
                productProcessing: true,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                productError: action.payload
            }
        default: return state;
    }
}