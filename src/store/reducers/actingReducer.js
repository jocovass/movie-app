import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  items: [],
  page: 1,
  total_pages: 1,
};

const actingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_ACTING_PAGE:
      return { ...state, page: action.payload.page };
    case types.FETCH_ACTING_START:
      return { ...state, loading: true };
    case types.FETCH_ACTING_FINIHS:
      return { ...state, loading: false };
    case types.FETCH_ACTING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default actingReducer;
