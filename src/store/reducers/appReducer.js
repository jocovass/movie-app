import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  sidebarOpen: false,
  movieGenres: [],
  tvGenres: [],
  image: {},
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return { ...state, loading: true };
    case types.STOP_LOADING:
      return { ...state, loading: false };
    case types.INITIALIZE:
      return {
        ...state,
        image: action.payload.image,
        movieGenres: action.payload.movieGenres,
        tvGenres: action.payload.tvGenres,
      };
    // case types.CONFIUGRE:
    //   return { ...state, image: action.payload.image };
    // case types.FETCH_MOVIE_GENRES:
    //   return {
    //     ...state,
    //     movieGenres: action.payload,
    //   };
    // case types.FETCH_TVSHOW_GENRES:
    //   return {
    //     ...state,
    //     tvGenres: action.payload,
    //   };
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
