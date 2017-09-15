import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import initialStateObject from './storeObject.json';
import reducer from "./reducers"

const middleWare = applyMiddleware(thunk, promise());
const initialState = initialStateObject

export default createStore(reducer, initialState, middleWare);