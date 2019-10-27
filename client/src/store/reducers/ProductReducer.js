import { ADD_PRODUCT, GET_PRODUCTS, PRODUCT_ERROR, storedState } from '../actions/types';
const initialState = storedState !== null ? storedState.products : {
    products: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}