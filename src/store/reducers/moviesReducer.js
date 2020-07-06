import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  items: [],
  page: 1,
  newPage: false,
  total_pages: 1,
};

const movieSReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_START:
      return { ...state, loading: true };
    case types.FETCH_MOVIES_FINISH:
      return { ...state, loading: false };
    case types.CHANGE_MOVIES_PAGE:
      return { ...state, page: action.payload, newPage: true };
    case types.FETCH_MOVIES:
      return {
        ...state,
        newPage: false,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        selected: action.payload.selected,
        items: action.payload.movies,
      };
    default:
      return state;
  }
};

export default movieSReducer;
