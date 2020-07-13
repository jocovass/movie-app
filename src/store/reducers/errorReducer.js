import * as types from '../actions/types';

const INITIAL_STATE = {
  code: null,
  message: null,
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CATCH_ERROR:
      return { ...state, ...action.payload };
    case types.CLEAR_ERROR:
      return { ...state, code: null, message: null };
    default:
      return state;
  }
};

export default errorReducer;
