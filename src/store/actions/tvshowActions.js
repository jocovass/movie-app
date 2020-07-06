import axios from '../../axios';
import * as types from './types';

// FETCH tvshow
// 2 end-point /movie/popular || top_rated ||
export const fetchTVShows = (sortBy = 'popular', page = 1) => async (
  dispatch
) => {
  // dispatch({ type: types.FETCH_START });
  const res = await axios.get(`/tv/${sortBy}`, {
    params: {
      page,
    },
  });
  dispatch({
    type: types.FETCH_TVSHOWS,
    payload: { selected: 'tvs', sortBy, data: res.data },
  });
};
