import { combineReducers } from 'redux';
import appReducer from './appReducer';
import moviesReducer from './moviesReducer';
import singleMovieReducer from './singleMovieReducer';
// import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  app: appReducer,
  movies: moviesReducer,
  singleMovie: singleMovieReducer,
});

export default rootReducer;
