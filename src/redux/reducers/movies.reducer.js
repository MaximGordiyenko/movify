import { noteConstants } from "../../constants/note.constants";

const initialState = {
  gameOfThronesData: [],
  loading: true,
  error: null,
};

export const gameOfThrones = (state = initialState, { type, payload }) => {
  switch (type) {
    case noteConstants.GET_SUCCESS:
      return {
        ...state,
        gameOfThronesData: payload,
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
};