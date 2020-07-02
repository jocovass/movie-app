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
    payload: { selected: 'movies', data: res.data },
  });
  dispatch({ type: types.FETCH_FINISH });
};

export const fetchMovie = (id) => async (dispatch) => {
  dispatch({ type: types.FETCH_START });
  const res = await Promise.all([
    axios.get(`/movie/${id}`),
    axios.get(`/movie/${id}/credits`),
    axios.get(`/movie/${id}/recommendations`),
  ]);
  await dispatch({
    type: types.FETCH_MOVIE,
    payload: {
      selected: '',
      singleItem: res[0].data,
      cast: res[1].data.cast,
      movies: res[2].data,
    },
  });
  dispatch({ type: types.FETCH_FINISH });
};
