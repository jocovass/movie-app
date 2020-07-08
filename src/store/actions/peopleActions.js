import axios from '../../axios';
import * as types from './types';

export const fetchPerson = (personId) => async (dispatch) => {
  dispatch({ type: types.FETCH_PERSON_START });
  const res = await axios.get(`/person/${personId}`);
  dispatch({ type: types.FETCH_PERSON, payload: { data: res.data } });
  dispatch({ type: types.FETCH_PERSON_FINISH });
};
