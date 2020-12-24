const initialState = {
  films: null,
  pagesCount: 0,
  loading: true,
  error: null
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FILMS':
      return {
        ...state,
        films: null,
        loading: true,
        pagesCount: 0,
        error: null
      };

    case 'FETCH_FILMS_SUCCESS':
      return {
        ...state,
        films: action.payload.films || [],
        pagesCount: action.payload.pagesCount || 0,
        loading: false,
        error: null
      };

    case 'FETCH_FILMS_ERROR':
      return {
        ...state,
        films: null,
        pagesCount: 0,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default filmsReducer;