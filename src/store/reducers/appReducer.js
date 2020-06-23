import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return { loading: true };
    case types.STOP_LOADING:
      return { loading: false };
    default:
      return state;
  }
};

export default appReducer;
