import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  items: [],
  page: 1,
  total_pages: 1,
  newPage: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH_START:
      return { ...state, loading: true };
    case types.SEARCH_FINISH:
      return { ...state, loading: false };
    case types.CHANGE_SEARCH_PAGE:
      return { ...state, page: action.payload.page, newPage: true };
    case types.SEARCH:
      return { ...state, ...action.payload, newPAge: false };
    default:
      return state;
  }
};

export default searchReducer;
