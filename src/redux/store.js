import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import { gameOfThrones } from "./reducers/movies/movies.reducer";
import { notes } from "./reducers/notes/notes.reducer";
import { loadState, saveState } from "./localStorage";
import throttle from 'lodash.throttle';
import { multiCryptos } from "./reducers/crypto/crypto.reducer";

const middlewareEnhancer = applyMiddleware(thunk, logger);
const composedEnhancers = compose(middlewareEnhancer);
const persistedState = loadState();

export const store = createStore(
  combineReducers({
    gameOfThrones,
    notes,
    multiCryptos,
  }),
  persistedState,
  composedEnhancers
);

// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
store.subscribe(throttle(() => {
  saveState({
    notes: store.getState().notes
  });
}, 1000));

/*
 applyMiddleware(thunk, logger) - logger must be the last middleware in chain, otherwise it will log thunk and
 promise, not actual actions
 https://github.com/LogRocket/redux-logger/issues/302
 */