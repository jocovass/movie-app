import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  sidebarOpen: false,
  selected: 'movies',
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
    case types.SET_SELECTED:
      return { ...state, selected: action.payload };
    case types.INITIALIZE:
      return {
        ...state,
        image: action.payload.image,
        movieGenres: action.payload.movieGenres,
        tvGenres: action.payload.tvGenres,
      };
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
