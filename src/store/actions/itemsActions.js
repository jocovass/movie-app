import axios from '../../axios';
import * as types from './types';
import history from '../../history';

export const changeItemsPage = (page) => ({
  type: types.CHANGE_ITEMS_PAGE,
  payload: page,
});

// FETCH movies
// 2 end-point /movie/popular || top_rated ||
export const fetchItems = (sortBy = 'popular', page = 1, department) => async (
  dispatch
) => {
  dispatch({ type: types.FETCH_ITEMS_START });
  try {
    const res = await axios.get(`/${department}/${sortBy}`, {
      params: {
        page,
      },
    });
    dispatch({ type: types.SET_SELECTED, payload: department });
    await dispatch({
      type: types.FETCH_ITEMS,
      payload: {
        page: res.data.page,
        total_pages: res.data.total_pages,
        items: res.data.results,
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
  dispatch({ type: types.FETCH_ITEMS_FINISH });
};
