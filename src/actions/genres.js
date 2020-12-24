import { getQuery } from '../services/query-service';
import { getFilms } from './films';

const getGenresInfo = () => {
  return async dispatch => {
    try {
      dispatch(fetchGenres());
      const response = await getQuery(`/getGenresInfo`, {});
      dispatch(fetchGenresSuccess(response));
      dispatch(getFilms(1));
    } catch (error) {
      dispatch(fetchGenresError(error.toString()));
    }
  };
};

const fetchGenres = () => {
  return {
    type: 'FETCH_GENRES'
  };
};

const fetchGenresSuccess = (payload) => {
  return {
    type: 'FETCH_GENRES_SUCCESS',
    payload
  };
};

const fetchGenresError = (error) => {
  return {
    type: 'FETCH_GENRES_ERROR',
    error
  };
};

const toggleSelect = (id) => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_SELECT',
      id
    });
    dispatch(getFilms(1));
  }
};


export {
  getGenresInfo,
  toggleSelect
}

