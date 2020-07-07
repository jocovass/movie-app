import * as types from './types';
import axios from '../../axios';

export const changeRecomPage = (page) => ({
  type: types.CHANGE_MOVIERECOM_PAGE,
  payload: {
    page,
  },
});

export const fetchMovieRecom = (id, page = 1) => async (dispatch) => {
  const res = await axios.get(`/movie/${id}/recommendations`, {
    params: {
      page,
    },
  });
  dispatch({ type: types.FETCH_MOVIERECOM_START });
  dispatch({
    type: types.FETCH_MOVIERECOM,
    payload: {
      movies: res.data.results,
      page: res.data.page,
      total_pages: res.data.total_pages,
    },
  });
  dispatch({ type: types.FETCH_MOVIERECOM_FINISH });
};
