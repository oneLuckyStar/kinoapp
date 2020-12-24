import { postQuery } from '../services/query-service';

const getFilms = (page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchFilms());
      const response = await postQuery(`/getFilms`, { ids: getState().genres.selected, page: page });
      dispatch(fetchFilmsSuccess(response));
    } catch (error) {
      dispatch(fetchFilmsError(error.toString()));
    }
  };
};

const fetchFilms = () => {
  return {
    type: 'FETCH_FILMS'
  };
};

const fetchFilmsSuccess = (payload) => {
  return {
    type: 'FETCH_FILMS_SUCCESS',
    payload
  };
};

const fetchFilmsError = (error) => {
  return {
    type: 'FETCH_FILMS_ERROR',
    error
  };
};


export {
	getFilms
}

