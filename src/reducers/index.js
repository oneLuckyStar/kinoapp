import { combineReducers } from 'redux';
import genres from './genres';
import films from './films';

export default combineReducers({
  genres,
  films
});
