import { authConstants } from "../../constants/auth.constants";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export const authUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstants.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    case authConstants.USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};