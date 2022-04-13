import { noteConstants } from "../../constants/note.constants";

const initialState = {
  arrayCryptos: [],
  loading: true,
  error: null,
};

export const multiCryptos = (state = initialState, { type, payload }) => {
  switch (type) {
    case noteConstants.GET_SUCCESS:
      return {
        ...state,
        arrayCryptos: payload,
        loading: false,
        error: null,
      };
    case noteConstants.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}