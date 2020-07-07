import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  movies: [],
  page: 1,
  total_pages: 1,
};

const moviRecomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIERECOM_START:
      return { ...state, loading: true };
    case types.FETCH_MOVIERECOM_FINISH:
      return { ...state, loading: false };
    case types.CHANGE_MOVIERECOM_PAGE:
      return { ...state, ...action.payload };
    case types.FETCH_MOVIERECOM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default moviRecomReducer;
