import * as types from './types';
import { fetchMovieGenres } from './movieActions';
import { fetchTVShowGenres } from './tvshowActions';

export const init = () => async (dispatch) => {
  dispatch({ type: types.START_LOADING });
  await dispatch(fetchMovieGenres());
  await dispatch(fetchTVShowGenres());
  dispatch({ type: types.STOP_LOADING });
};
