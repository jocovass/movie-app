import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  items: [],
  page: 1,
  total_pages: 1,
};

const recReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_REC_START:
      return { ...state, loading: true };
    case types.FETCH_REC_FINISH:
      return { ...state, loading: false };
    case types.CHANGE_REC_PAGE:
      return { ...state, ...action.payload };
    case types.FETCH_REC:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default recReducer;
