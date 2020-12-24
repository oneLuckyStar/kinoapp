const initialState = {
  genres: null,
  selected: [],
  loading: true,
  error: null
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GENRES':
      return {
        ...state,
        testData: null,
        loading: true,
        error: null
      };

    case 'FETCH_GENRES_SUCCESS':
      return {
        ...state,
        genres: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_GENRES_ERROR':
      return {
        ...state,
        testData: null,
        loading: false,
        error: action.error
      };

    case 'TOGGLE_SELECT':
      if (state.selected.indexOf(action.id) != -1) {
        return {
          ...state,
          selected: state.selected.filter((id) => id != action.id)
        };
      } else {
        return {
          ...state,
          selected: [...state.selected, action.id]
        };
      };

    default:
      return state;
  }
};

export default genresReducer;