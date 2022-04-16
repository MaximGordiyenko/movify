import { commonConstants } from "../../constants/common.constants";

const initialState = {
  gameOfThronesData: [],
  loading: true,
  error: null,
};

export const gameOfThrones = (state = initialState, { type, api, error }) => {
  switch (type) {
    case commonConstants.GET_SUCCESS:
      return {
        ...state,
        gameOfThronesData: api,
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
};