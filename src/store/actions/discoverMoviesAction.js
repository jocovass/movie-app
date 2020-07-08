import axios from '../../axios';
import * as types from './types';

export const changeDiscoverMoviesPage = (page) => ({
  type: types.CHANGE_DISCOVER_MOVIES_PAGE,
  payload: {
    page,
  },
});

export const discoverMovies = (
  genre,
  page = 1,
  sortBy = 'popularity.desc'
) => async (dispatch, getState) => {
  const { app } = getState();

  const selectedGenre = app.movieGenres.find((el) => el.id === Number(genre));
  dispatch({ type: types.DISCOVER_MOVIES_START });
  const res = await axios.get(`/discover/movie`, {
    params: {
      page,
      sort_by: sortBy,
      with_genres: genre,
    },
  });
  dispatch({
    type: types.SET_SELECTED,
    payload: `movie-${selectedGenre.name}`,
  });
  dispatch({
    type: types.DISCOVER_MOVIES,
    payload: {
      movies: res.data.results,
      page: res.data.page,
      total_pages: res.data.total_pages,
    },
  });
  dispatch({ type: types.DISCOVER_MOVIES_FINISH });
};
