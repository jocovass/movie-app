import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  items: [],
  page: 1,
  newPage: false,
  total_pages: 1,
};

const discoverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.DISCOVER_START:
      return { ...state, loading: true };
    case types.DISCOVER_FINISH:
      return { ...state, loading: false };
    case types.CHANGE_DISCOVER_PAGE:
      return { ...state, page: action.payload.page, newPage: true };
    case types.DISCOVER:
      return { ...state, ...action.payload, newPage: false };
    default:
      return state;
  }
};

export default discoverReducer;
