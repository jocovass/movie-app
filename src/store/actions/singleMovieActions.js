import * as types from './types';
import axios from '../../axios';

export const fetchSingleMovie = (id) => async (dispatch) => {
  dispatch({ type: types.FETCH_SINGLEMOVIE_START });

  const res = await Promise.all([
    axios.get(`/movie/${id}`),
    axios.get(`/movie/${id}/credits`),
  ]);
  dispatch({
    type: types.FETCH_SINGLEMOVIE,
    payload: {
      data: res[0].data,
      cast: res[1].data.cast,
    },
  });
  dispatch({ type: types.SET_SELECTED, payload: '' });
  dispatch({ type: types.FETCH_SINGLEMOVIE_FINISH });
};
