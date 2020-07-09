import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  data: {},
  cast: [],
};

const singleMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SINGLEITEM_START:
      return { ...state, loading: true };
    case types.FETCH_SINGLEITEM_FINISH:
      return { ...state, loading: false };
    case types.FETCH_SINGLEITEM:
      return {
        ...state,
        data: action.payload.data,
        cast: action.payload.cast,
      };
    default:
      return state;
  }
};

export default singleMovieReducer;
