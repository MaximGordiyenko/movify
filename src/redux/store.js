import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import { gameOfThronesReducer } from "./reducers/movies/movies.reducer";

const middlewareEnhancer = applyMiddleware(thunk, logger);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(
  combineReducers({
    gameOfThronesReducer,
  }),
  undefined,
  composedEnhancers
);

/*
 applyMiddleware(thunk, logger) - logger must be the last middleware in chain, otherwise it will log thunk and
 promise, not actual actions
 https://github.com/LogRocket/redux-logger/issues/302
 */
