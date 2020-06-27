import axios from '../../axios';
import * as types from './types';

// we FETCH all the available GENRES from the API to generate the menu on initial load
const fetchMovieGenres = () => async (dispatch) => {
  const res = await axios.get('/genre/movie/list');

  dispatch({ type: types.FETCH_MOVIE_GENRES, payload: res.data.genres });
};

const fetchTVShowGenres = () => async (dispatch) => {
  const res = await axios.get('/genre/tv/list');
  dispatch({ type: types.FETCH_TVSHOW_GENRES, payload: res.data.genres });
};

export const init = () => async (dispatch) => {
  dispatch({ type: types.START_LOADING });
  dispatch(fetchMovieGenres());
  dispatch(fetchTVShowGenres());
  dispatch({ type: types.STOP_LOADING });
};

export const toggleSidebar = (sidebarOpen) => ({
  type: types.TOGGLE_SIDEBAR,
  payload: sidebarOpen,
});
