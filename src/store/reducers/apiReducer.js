import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  selected: 'movies',
  singleItem: {},
  cast: [],
  movies: { results: [], page: 1, total_pages: 1 },
  tvs: { results: [], page: 1, total_pages: 1 },
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
        ...action.payload,
        selected: action.payload.selected,
        movies: action.payload.data,
      };
    case types.FETCH_TVSHOWS:
      return {
        ...state,
        ...action.payload,
        selected: action.payload.selected,
        tvs: action.payload.data,
      };
    case types.FETCH_MOVIE:
      return {
        ...state,
        ...action.payload,
        singleItem: action.payload.singleItem,
        cast: action.payload.cast,
        movies: action.payload.movies,
      };
    default:
      return state;
  }
};

export default apiReducer;
