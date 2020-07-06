import axios from '../../axios';
import * as types from './types';

export const changePage = (page) => ({
  type: types.CHANGE_MOVIES_PAGE,
  payload: page,
});

// FETCH movies
// 2 end-point /movie/popular || top_rated ||
export const fetchMovies = (sortBy = 'popular', page = 1) => async (
  dispatch
) => {
  dispatch({ type: types.FETCH_MOVIES_START });
  const res = await axios.get(`/movie/${sortBy}`, {
    params: {
      page,
    },
  });
  dispatch({ type: types.SET_SELECTED, payload: 'movies' });
  await dispatch({
    type: types.FETCH_MOVIES,
    payload: {
      page: res.data.page,
      total_pages: res.data.total_pages,
      movies: res.data.results,
    },
  });
  dispatch({ type: types.FETCH_MOVIES_FINISH });
};
