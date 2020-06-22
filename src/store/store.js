import reducer from './reducers/index';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancer = compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
