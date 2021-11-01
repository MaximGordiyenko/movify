import { GET_FAILURE, GET_SUCCESS } from "../../actions/types";

const initialState = {
  arrayCryptos: [],
  loading: true,
  error: null,
};

export const multiCryptos = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        arrayCryptos: payload,
        loading: false,
        error: null,
      };
    case GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}