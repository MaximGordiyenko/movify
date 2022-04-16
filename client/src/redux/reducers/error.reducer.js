import { authConstants } from "../../constants/auth.constants";

export const authError = (state = {}, { type, error }) => {
  switch (type) {
    case authConstants.GET_ERRORS:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};