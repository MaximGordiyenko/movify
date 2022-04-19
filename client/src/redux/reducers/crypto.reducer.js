import { commonConstants } from "../../constants/common.constants";

const initialState = {
  arrayCryptos: [],
  loading: true,
};

export const multiCryptos = (state = initialState, { type, api }) => {
  switch (type) {
    case commonConstants.GET_SUCCESS:
      return {
        ...state,
        arrayCryptos: api,
        loading: false,
      };
    default:
      return state;
  }
};