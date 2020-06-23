import { combineReducers } from 'redux';
import appReducer from './appReducer';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  app: appReducer,
  api: apiReducer,
});

export default rootReducer;