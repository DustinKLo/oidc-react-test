import { SET_AUTH } from "./constants";

const initialState = {
  isAuthed: false,
  authInProgress: true,
  user: null,
  accessToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      const user = action.payload;
      return {
        ...state,
        isAuthed: true,
        authInProgress: false,
        user,
        accessToken: user && user.access_token ? user.access_token : null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
