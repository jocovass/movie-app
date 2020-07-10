import { combineReducers } from 'redux';
import appReducer from './appReducer';
import itemsReducer from './itemsReducer';
import singleItemReducer from './singleItemReducer';
import recReducer from './recReducer';
import discoverReducer from './discoverReducer';
import peopleReducer from './peopleReducer';
import actingReducer from './actingReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
  singleItem: singleItemReducer,
  rec: recReducer,
  discover: discoverReducer,
  people: peopleReducer,
  acting: actingReducer,
  search: searchReducer,
});

export default rootReducer;
