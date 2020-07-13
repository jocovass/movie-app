import * as types from './types';
import axios from '../../axios';

export const fetchSingleItem = (id, department) => async (dispatch) => {
  dispatch({ type: types.FETCH_SINGLEITEM_START });
  const res = await Promise.all([
    axios.get(`/${department}/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
    axios.get(`/${department}/${id}/credits`),
  ]);
  dispatch({
    type: types.FETCH_SINGLEITEM,
    payload: {
      data: res[0].data,
      cast: res[1].data.cast,
    },
  });
  dispatch({ type: types.SET_SELECTED, payload: '' });
  dispatch({ type: types.FETCH_SINGLEITEM_FINISH });
};
