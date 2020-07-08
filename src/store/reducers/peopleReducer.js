import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  data: {},
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PERSON_START:
      return { ...state, loading: true };
    case types.FETCH_PERSON_FINISH:
      return { ...state, loading: false };
    case types.FETCH_PERSON:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
