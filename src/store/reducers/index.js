import { combineReducers } from 'redux';
import appReducer from './appReducer';
import moviesReducer from './moviesReducer';
import singleMovieReducer from './singleMovieReducer';
import movieRecomReducer from './movieRecomReducer';
import discoverMoviesReducer from './discoverMoviesReducer';
import peopleReducer from './peopleReducer';
// import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  app: appReducer,
  movies: moviesReducer,
  singleMovie: singleMovieReducer,
  movieRecom: movieRecomReducer,
  discoverMovies: discoverMoviesReducer,
  people: peopleReducer,
});

export default rootReducer;
