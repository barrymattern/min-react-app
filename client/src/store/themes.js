import { fetch } from './csrf'; // Custom csrf function

// Variable set up to help avoid spelling errors *******************************
const GET_ALL_THEMES = 'themes/getAllThemes';
const GET_SINGLE_THEME = 'themes/getSingleTheme';

// Action Creator – produces an object *****************************************
const getAllThemes = (themes) => ({
  type: GET_ALL_THEMES,
  payload: themes,
});

const getSingleTheme = (theme) => ({
  type: GET_SINGLE_THEME,
  payload: theme,
});

// Thunk Action Creator – produces a function **********************************
// Thunks are mainly for async
export const fetchAllThemes = () => {
  return async (dispatch) => {
    // Interact with server
    const response = await fetch('/api/themes');
    dispatch(
      getAllThemes(response.data) // Already JSON from custom csrf
    );
  };
};

export const fetchSingleTheme = (themeId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/themes/${themeId}`);
    dispatch(
      getSingleTheme(response.data)
    );
  };
};

// Reducer *********************************************************************

const initialState = {};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_THEMES:
      newState = {}; // payload from Action Creator, turned into object
      action.payload.forEach(theme => {
        newState[theme.id] = theme; // sets theme.id as keys for object
      });
      return newState;
    case GET_SINGLE_THEME:
      return { ...state, [action.payload.theme.id]: action.payload.theme };
    default:
      return state;
  }
};

export default reducer;
