import * as types from './types';
import axios from '../../axios';
import history from '../../history';

export const changeRecPage = (page) => ({
  type: types.CHANGE_REC_PAGE,
  payload: {
    page,
  },
});

export const fetchRec = (id, page = 1, department) => async (dispatch) => {
  try {
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
  dispatch({ type: types.FETCH_REC_FINISH });
};
