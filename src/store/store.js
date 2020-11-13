import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from '../enhancers/monitorReducer';
import logger from '../middleware/logger';
import {rootReducer} from './reducers';
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase } from "react-redux-firebase";
import firebaseConfig from "../config/firebaseConfig";

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunk.withExtraArgument({getFirebase, getFirestore})]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  
  return createStore(rootReducer, preloadedState, compose(composedEnhancers,reduxFirestore(firebaseConfig)))
}
