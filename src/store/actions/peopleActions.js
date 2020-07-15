import axios from '../../axios';
import * as types from './types';
import history from '../../history';

export const fetchPerson = (personId) => async (dispatch) => {
  dispatch({ type: types.FETCH_PERSON_START });
  try {
    const res = await axios.get(`/person/${personId}`);
    dispatch({ type: types.FETCH_PERSON, payload: { data: res.data } });
  } catch (err) {
    dispatch({
      type: types.CATCH_ERROR,
      payload: {
        message: err.response.data.status_message,
        code: err.response.status,
      },
    });
    history.push('/error');
  }
  dispatch({ type: types.FETCH_PERSON_FINISH });
};
