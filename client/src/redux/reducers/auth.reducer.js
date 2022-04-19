import { authConstants } from "../../constants/auth.constants";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  jwt: {},
};

export const auth = (state = initialState, { type, user, jwt }) => {
  switch (type) {
    case authConstants.USER_REGISTER:
      return {
        ...state,
        user,
      };
    case authConstants.USER_LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(jwt),
        jwt,
      };
    default:
      return state;
  }
};