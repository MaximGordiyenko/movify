import { moviesConstants } from "../../constants/movies.constants";

const initialState = {
  gameOfThronesData: [],
  loading: true,
};

export const setGameOfThrones = (state = initialState, { type, movies }) => {
  switch (type) {
    case moviesConstants.GET_GOT_SUCCESS:
      return {
        ...state,
        gameOfThronesData: movies,
        loading: false,
      };
    default:
      return state;
  }
};