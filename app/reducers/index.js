import { combineReducers } from 'redux';
import gifs from './gifs';
import search from './search';

export default combineReducers({
  gifs,
  search
});
