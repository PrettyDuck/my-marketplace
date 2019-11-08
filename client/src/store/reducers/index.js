import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AlertReducer from './AlertReducer';
import ProductReducer from './ProductReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
  auth: AuthReducer,
  alertsReducer: AlertReducer,
  products: ProductReducer,
  favorites: FavoriteReducer,
});
