import * as types from './types';
import axios from '../../axios';
import history from '../../history';

export const changeSearchPage = (page) => ({
  type: types.CHANGE_SEARCH_PAGE,
  payload: {
    page,
  },
});

export const fetchSearch = (page = 1, query) => async (dispatch) => {
  dispatch({ type: types.SEARCH_START });
  try {
    const res = await axios.get(`/search/movie`, {
      params: {
        query,
        page,
      },
    });
    dispatch({ type: types.SET_SELECTED, payload: '' });
    dispatch({
      type: types.SEARCH,
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
  dispatch({ type: types.SEARCH_FINISH });
};
