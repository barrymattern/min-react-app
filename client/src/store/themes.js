import { fetch } from './csrf'; // Custom csrf function

// Variable set up to help avoid spelling errors *******************************
const GET_ALL_THEMES = 'themes/getAllThemes';
const GET_All_LIGHT_THEMES = 'themes/getAllLightThemes';
const GET_ALL_DARK_THEMES = 'themes/getAllDarkThemes';
const GET_SINGLE_THEME = 'themes/getSingleTheme';

// Action Creator – produces an object *****************************************
const getAllThemes = (themes) => ({
  type: GET_ALL_THEMES,
  payload: themes,
});

const getAllLightThemes = (themes) => ({
  type: GET_All_LIGHT_THEMES,
  payload: themes,
});

const getAllDarkThemes = (themes) => ({
  type: GET_ALL_DARK_THEMES,
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
      getAllThemes(response.data) // Already JSON from custom csrf fetch
    );
  };
};

export const fetchAllLightThemes = () => {
  return async (dispatch) => {
    const response = await fetch('/api/themes/light');
    dispatch(
      getAllLightThemes(response.data)
    );
  };
};

export const fetchAllDarkThemes = () => {
  return async (dispatch) => {
    const response = await fetch('/api/themes/dark');
    dispatch(
      getAllDarkThemes(response.data)
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
      newState = {}; // Payload from Action Creator, turned into object
      action.payload.forEach(theme => {
        newState[theme.id] = theme; // Sets theme.id as keys for object
      });
      return { ...state, ...newState }; // Spreads newState into existing state
    case GET_All_LIGHT_THEMES:
      newState = {};
      action.payload.forEach(theme => {
        newState[theme.id] = theme;
      });
      return { ...state, ...newState };
    case GET_ALL_DARK_THEMES:
      newState = {};
      action.payload.forEach(theme => {
        newState[theme.id] = theme;
      });
      return { ...state, ...newState };
    case GET_SINGLE_THEME:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;
