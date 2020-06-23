import axios from '../../axios';
import * as types from './types';

// we FETCH all the available GENRES from the API to generate the menu on initial load
export const fetchMovieGenres = () => async (dispatch) => {
  const res = await axios.get('/genre/movie/list');
  dispatch({ type: types.FETCH_MOVIE_GENRES, payload: res.data.genres });
};

// FETCH movies
// 3 end-point /movie/popular || top_rated ||
export const fetchMovies = (sortBy = 'popular', page = 1) => async (
  dispatch
) => {
  dispatch({ type: types.FETCH_START });
  const res = await axios.get(`/movie/${sortBy}`, {
    params: {
      page,
    },
  });
  dispatch({ type: types.FETCH_MOVIES, payload: res.data });
  dispatch({ type: types.FETCH_FINISH });
};
