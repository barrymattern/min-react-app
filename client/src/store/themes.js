import { fetch } from './csrf'; // Custom csrf function

// Variable set up to help avoid spelling errors
const GET_ALL_THEMES = 'themes/getAllThemes';

// Action Creator – produces an object
const getAllThemes = (themes) => ({
  type: GET_ALL_THEMES,
  payload: themes,
});

// Thunk Action Creator – produces a function
export const fetchAllThemes = () => {
  return async (dispatch) => {
    // Interact with server
    const response = await fetch('api/themes');
    dispatch(
      getAllThemes(response.data) // Already JSON from custom csrf
    );
  };
};

const initialState = {};

function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_ALL_THEMES:
      newState = action.themes;
    default:
      return state;
  }
};
