import { GET_FAILURE, GET_SUCCESS } from "../../actions/types";

const initialState = {
  gameOfThronesData: [],
  loading: false,
  error: null,
};

export const gameOfThronesReducer = (state = initialState, { type, payload }) => {
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
