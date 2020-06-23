import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  sortBy: 'popularity',
  movies: [],
  tvshows: [],
  genres: {
    movie: [],
    tvshow: [],
  },
  page: 1,
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return { ...state, loading: true };
    case types.FETCH_FINISH:
      return { ...state, loading: false };
    case types.FETCH_MOVIE_GENRES:
      return { ...state, genres: { ...state.genres, movie: action.payload } };
    case types.FETCH_TVSHOW_GENRES:
      return { ...state, genres: { ...state.genres, tvshow: action.payload } };
    case types.FETCH_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
