import { GET_FAILURE, GET_SUCCESS } from "../actions/types";

const initialState = {
  gameOfThronesData: [],
  loading: true,
  error: null,
};

export const gameOfThrones = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        gameOfThronesData: payload,
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
};