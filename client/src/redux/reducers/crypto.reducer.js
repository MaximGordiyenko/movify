import { commonConstants } from "../../constants/common.constants";

const initialState = {
  arrayCryptos: [],
  loading: true,
  error: null,
};

export const multiCryptos = (state = initialState, { type, api, error }) => {
  switch (type) {
    case commonConstants.GET_SUCCESS:
      return {
        ...state,
        arrayCryptos: api,
        loading: false,
        error: null,
      };
    case commonConstants.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
}