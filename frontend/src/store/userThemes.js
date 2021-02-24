import { fetch } from './csrf';

// Variable set up to help avoid spelling errors *******************************
const GET_ALL_USER_THEMES = 'themes/getAllUserThemes';

// Action Creator – produces an object *****************************************
const getAllUserThemes = (themes) => ({
  type: GET_ALL_USER_THEMES,
  payload: themes,
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
    default:
      return state;
  };
};

export default reducer;
