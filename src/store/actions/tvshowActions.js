import axios from '../../axios';
import * as types from './types';

// const fetchMovies = () => {};

export const fetchTVShowGenres = () => async (dispatch) => {
  const res = await axios.get('/genre/tv/list');
  dispatch({ type: types.FETCH_TVSHOW_GENRES, payload: res.data.genres });
};
