import { commonConstants } from "../../constants/common.constants";

const initialState = {
  gameOfThronesData: [],
  loading: true,
};

export const gameOfThrones = (state = initialState, { type, api }) => {
  switch (type) {
    case commonConstants.GET_SUCCESS:
      return {
        ...state,
        gameOfThronesData: api,
        loading: false,
      };
    default:
      return state;
  }
};