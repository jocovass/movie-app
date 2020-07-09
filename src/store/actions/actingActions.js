import axios from '../../axios';
import * as types from './types';

export const changeActingPage = (page) => ({
  type: types.CHANGE_ACTING_PAGE,
  payload: {
    page,
  },
});

export const fetchActing = (page = 1, castId) => async (dispatch) => {
  dispatch({ type: types.FETCH_ACTING_START });
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
  dispatch({ type: types.FETCH_ACTING_FINIHS });
};
