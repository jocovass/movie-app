import axios from '../../axios';
import * as types from './types';
import history from '../../history';

export const changeActingPage = (page) => ({
  type: types.CHANGE_ACTING_PAGE,
  payload: {
    page,
  },
});

export const fetchActing = (page = 1, castId) => async (dispatch) => {
  dispatch({ type: types.FETCH_ACTING_START });
  try {
    const res = await axios.get(`/discover/movie`, {
      params: {
        sort_by: 'popularity.desc',
        with_cast: castId,
        page,
      },
    });
    dispatch({
      type: types.FETCH_ACTING,
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
  dispatch({ type: types.FETCH_ACTING_FINIHS });
};
