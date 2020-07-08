import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  movies: [],
  page: 1,
  newPage: false,
  total_pages: 1,
};

const discoverMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.DISCOVER_MOVIES_START:
      return { ...state, loading: true };
    case types.DISCOVER_MOVIES_FINISH:
      return { ...state, loading: false };
    case types.CHANGE_DISCOVER_MOVIES_PAGE:
      return { ...state, page: action.payload.page, newPage: true };
    case types.DISCOVER_MOVIES:
      return { ...state, ...action.payload, newPage: false };
    default:
      return state;
  }
};

export default discoverMoviesReducer;
