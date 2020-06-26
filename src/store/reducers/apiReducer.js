import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  sortBy: 'popular',
  selected: 'movie',
  movies: [],
  tv: [],
  page: 1,
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return { ...state, loading: true };
    case types.FETCH_FINISH:
      return { ...state, loading: false };
    case types.FETCH_MOVIES:
      return {
        ...state,
        selected: action.payload.selected,
        movies: action.payload.data,
      };
    case types.FETCH_TVSHOWS:
      return {
        ...state,
        selected: action.payload.selected,
        tv: action.payload.data,
      };
    default:
      return state;
  }
};

export default apiReducer;
