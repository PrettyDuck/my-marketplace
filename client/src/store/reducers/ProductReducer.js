import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  GET_SINGLE_PRODUCT,
  DELETE_PRODUCT,
  storedState,
  UPDATE_PRODUCT,
  SEARCH_PRODUCTS,
  FILTER_PRODUCTS,
  FILTER_SEARCHED_PRODUCTS,
} from '../actions/types';

const initialState =
  storedState !== null
    ? storedState.products
    : {
        products: null,
        currentProduct: null,
        productError: null,
        searched: null,
        filtered: null,
      };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        currentProduct: null,
        searched: null,
        filtered: null,
        products: action.payload,
      };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        searched: null,
        filtered: null,
        currentProduct: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        currentProduct: null,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        currentProduct: null,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        productError: action.payload,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searched: state.products.filter(product => {
          const NameRegex = new RegExp(`${action.payload.searchName}`, 'gi');
          const LocationRegex = new RegExp(`${action.payload.searchLocation}`, 'gi');
          return product.name.match(NameRegex) && product.location.match(LocationRegex);
        }),
        filtered: null,
      };
    case FILTER_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        filtered: state.products.filter(product => {
          let CategoryRegex;
          if (action.payload.filterCategory !== 'Choose Category') {
            CategoryRegex = new RegExp(`${action.payload.filterCategory}`, 'gi');
          } else {
            CategoryRegex = new RegExp('', 'gi');
          }
          if (action.payload.filterPriceFrom !== '' && action.payload.filterPriceTo !== '') {
            return (
              Number(product.price) >= Number(action.payload.filterPriceFrom) &&
              Number(product.price) <= Number(action.payload.filterPriceTo) &&
              product.category.match(CategoryRegex)
            );
          } else if (action.payload.filterPriceFrom !== '') {
            return (
              Number(product.price) >= Number(action.payload.filterPriceFrom) &&
              product.category.match(CategoryRegex)
            );
          } else if (action.payload.filterPriceTo !== '') {
            return (
              Number(product.price) <= Number(action.payload.filterPriceFrom) &&
              product.category.match(CategoryRegex)
            );
          } else {
            return product.category.match(CategoryRegex);
          }
        }),
      };
    case FILTER_SEARCHED_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        filtered: state.searched.filter(product => {
          let CategoryRegex;
          if (action.payload.filterCategory !== 'Choose Category') {
            CategoryRegex = new RegExp(`${action.payload.filterCategory}`, 'gi');
          } else {
            CategoryRegex = new RegExp('', 'gi');
          }
          if (action.payload.filterPriceFrom !== '' && action.payload.filterPriceTo !== '') {
            return (
              Number(product.price) >= Number(action.payload.filterPriceFrom) &&
              Number(product.price) <= Number(action.payload.filterPriceTo) &&
              product.category.match(CategoryRegex)
            );
          } else if (action.payload.filterPriceFrom !== '') {
            return (
              Number(product.price) >= Number(action.payload.filterPriceFrom) &&
              product.category.match(CategoryRegex)
            );
          } else if (action.payload.filterPriceTo !== '') {
            return (
              Number(product.price) <= Number(action.payload.filterPriceFrom) &&
              product.category.match(CategoryRegex)
            );
          } else {
            return product.category.match(CategoryRegex);
          }
        }),
      };
    default:
      return state;
  }
};
