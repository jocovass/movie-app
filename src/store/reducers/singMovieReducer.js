import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  data: {},
  cast: [],
};

const singleItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SINGLEITEM_START:
      return { ...state, loading: true };
    case types.FETCH_SINGLEITEM_FINISH:
      return { ...state, loading: false };
    case types.FETCH_SINGLEITEM:
      return {
        ...state,
        data: action.payload.data,
        cast: action.payload.cast,
      };
    default:
      return state;
  }
};

export default singleItemReducer;

// export const fetchRecommendations = (id) => async (dispatch) => {
//     const res = await axios.get(`/movie/${id}/recommendations`)

//     dispatch({type: types, payload: {
//         movies: res[2].data.results,
//         page: res[2].data.page,
//         total_pages: res[2].data.total_pages,
//     }})
// }
