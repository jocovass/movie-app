import axios from '../../axios';
import * as types from './types';

export const changeDiscoverPage = (page) => ({
  type: types.CHANGE_DISCOVER_PAGE,
  payload: {
    page,
  },
});

export const discover = (
  genre,
  page = 1,
  sortBy = 'popularity.desc',
  department
) => async (dispatch, getState) => {
  const { app } = getState();
  let selectedGenre = '';
  if (department === 'movie') {
    selectedGenre = app.movieGenres.find((el) => el.id === Number(genre));
  } else {
    selectedGenre = app.tvGenres.find((el) => el.id === Number(genre));
  }

  dispatch({ type: types.DISCOVER_START });
  const res = await axios.get(`/discover/${department}`, {
    params: {
      page,
      sort_by: sortBy,
      with_genres: genre,
    },
  });
  dispatch({
    type: types.SET_SELECTED,
    payload: `${department}-${selectedGenre.name}`,
  });
  dispatch({
    type: types.DISCOVER,
    payload: {
      items: res.data.results,
      page: res.data.page,
      total_pages: res.data.total_pages,
    },
  });
  dispatch({ type: types.DISCOVER_FINISH });
};
