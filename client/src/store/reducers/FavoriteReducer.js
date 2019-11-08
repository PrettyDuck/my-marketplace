import { PROCESS_FAVORITE, storedState } from '../actions/types';

const initialState = storedState !== null ? storedState.favorites : [];

export default (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_FAVORITE: {
      if (state.some(item => item === action.payload))
        return state.filter(item => item !== action.payload);
      else {
        return state.concat(action.payload);
      }
    }
    default:
      return state;
  }
};
