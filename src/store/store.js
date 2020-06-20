import reducer from './reducers/index';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
