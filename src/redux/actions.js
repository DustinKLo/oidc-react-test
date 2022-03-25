import { SET_AUTH } from "./constants";

export const setAuth = (user) => ({
  type: SET_AUTH,
  payload: user,
});
