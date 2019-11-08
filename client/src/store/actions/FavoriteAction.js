import { PROCESS_FAVORITE_REQUEST, PROCESS_FAVORITE } from './types';

export const processFavoriteRequest = id => {
  return {
    type: PROCESS_FAVORITE_REQUEST,
    payload: id,
  };
};

export const processFavoriteSuccess = id => {
  return {
    type: PROCESS_FAVORITE,
    payload: id,
  };
};
