import axios from '../../axios';
import * as types from './types';

// FETCH movies
// 2 end-point /movie/popular || top_rated ||
export const fetchMovies = (sortBy = 'popular', page = 1) => async (
  dispatch
) => {
  dispatch({ type: types.FETCH_START });
  const res = await axios.get(`/movie/${sortBy}`, {
    params: {
      page,
    },
  });
  dispatch({
    type: types.FETCH_MOVIES,
    payload: { selected: 'movie', data: res.data },
  });
  dispatch({ type: types.FETCH_FINISH });
};
