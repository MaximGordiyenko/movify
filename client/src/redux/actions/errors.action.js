import { errorConstants } from "../../constants/error.constants";

// const success = user => ({
//   type: commonConstants.GET_SUCCESS,
//   user,
// });

const failure = error => ({
  type: errorConstants.GET_FAILURE,
  error: error?.response?.data,
});

export const errorAction = {
  // success,
  failure,
}