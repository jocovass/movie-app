import * as types from './types';
import axios from '../../axios';

export const changeRecPage = (page) => ({
  type: types.CHANGE_REC_PAGE,
  payload: {
    page,
  },
});

export const fetchRec = (id, page = 1, department) => async (dispatch) => {
  const res = await axios.get(`/${department}/${id}/recommendations`, {
    params: {
      page,
    },
  });
  dispatch({ type: types.FETCH_REC_START });
  dispatch({
    type: types.FETCH_REC,
    payload: {
      items: res.data.results,
      page: res.data.page,
      total_pages: res.data.total_pages,
    },
  });
  dispatch({ type: types.FETCH_REC_FINISH });
};
