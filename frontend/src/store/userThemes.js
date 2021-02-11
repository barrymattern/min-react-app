import { fetch } from './csrf';

// Variable set up to help avoid spelling errors *******************************
const GET_ALL_USER_THEMES = 'themes/getAllUserThemes';
const GET_ALL_USER_DARK_THEMES = 'themes/getAllUserDarkThemes';
const GET_SINGLE_USER_THEME = 'themes/getSingleUserTheme';

// Action Creator – produces an object *****************************************
const getAllUserThemes = (themes) => ({
  type: GET_ALL_USER_THEMES,
  payload: themes,
});

const getAllUserDarkThemes = (themes) => ({
  type: GET_ALL_USER_DARK_THEMES,
  payload: themes,
});

const getSingleUserTheme = (theme) => ({
  type: GET_SINGLE_USER_THEME,
  payload: theme,
});

// Thunk Action Creator – produces a function **********************************
export const fetchAllUserThemes = (userId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/themes`);
    dispatch(
      getAllUserThemes(response.data)
    );
  };
};

export const fetchAllUserDarkThemes = (userId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/themes/dark`);
    dispatch(
      getAllUserDarkThemes(response.data)
    );
  };
};

export const fetchSingleUserTheme = (themeId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/themes/${themeId}`);
    dispatch(
      getSingleUserTheme(response.data)
    );
  };
};

// Reducer *********************************************************************

const initialState = {};

function reducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case GET_ALL_USER_THEMES:
      newState = {};
      action.payload.forEach(theme => {
        newState[theme.id] = theme;
      });
      return { ...state, ...newState };
    case GET_ALL_USER_DARK_THEMES:
      newState = {};
      action.payload.forEach(theme => {
        newState[theme.id] = theme;
      });
      return { ...state, ...newState };
    case GET_SINGLE_USER_THEME:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  };
};

export default reducer;
