import axios from '../../axios';
import * as types from './types';
import history from '../../history';

export const init = () => async (dispatch) => {
  try {
    const res = await Promise.all([
      axios.get('/configuration'),
      axios.get('/genre/movie/list'),
      axios.get('/genre/tv/list'),
    ]);

    // Dispatch the res. if the request succeeded
    await dispatch({
      type: types.INITIALIZE,
      payload: {
        image: {
          url: res[0].data.images.secure_base_url,
          sizes: {
            poster_sizes: [...res[0].data.images.poster_sizes],
            backdrop_sizes: [...res[0].data.images.backdrop_sizes],
            profile_sizes: [...res[0].data.images.profile_sizes],
          },
        },
        movieGenres: res[1].data.genres,
        tvGenres: res[2].data.genres,
      },
    });
  } catch (err) {
    dispatch({
      type: types.CATCH_ERROR,
      payload: {
        message: err.response.data.status_message,
        code: err.response.status,
      },
    });
    history.push('/error');
  }

  // Clear the loader when HTTP is done
  dispatch({ type: types.STOP_LOADING });
};

export const toggleSidebar = (sidebarOpen) => ({
  type: types.TOGGLE_SIDEBAR,
  payload: sidebarOpen,
});
