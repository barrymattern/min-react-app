import { fetch } from './csrf'; // Custom csrf function

// Variable set up to help avoid spelling errors *******************************
const GET_ALL_THEMES = 'themes/getAllThemes';
// const GET_SINGLE_THEME = 'themes/getSingleTheme';
const SAVE_NEW_THEME = 'themes/postNewTheme'

// Action Creator – produces an object *****************************************
const getAllThemes = (themes) => ({
  type: GET_ALL_THEMES,
  payload: themes,
});

// const getSingleTheme = (theme) => ({
//   type: GET_SINGLE_THEME,
//   payload: theme,
// });

const saveNewTheme = (theme) => ({
  type: SAVE_NEW_THEME,
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

// export const fetchSingleTheme = (themeId) => {
//   return async (dispatch) => {
//     const response = await fetch(`/api/themes/${themeId}`);
//     dispatch(
//       getSingleTheme(response.data)
//     );
//   };
// };

export const postNewTheme = (theme) => {
  return async (dispatch) => {
    const response = await fetch('/api/themes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        theme
      ),
    });
  // Don't need response.ok as custom csrf fetch takes that into account
  dispatch(saveNewTheme(response.data))
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
    // case GET_SINGLE_THEME:
      // return { ...state, [action.payload.id]: action.payload };
    case SAVE_NEW_THEME:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};

export default reducer;
