import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from  "redux-thunk"
import localStorageMiddleware from "./localStorageMiddleware";
import rootReducer from "./Reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware, localStorageMiddleware)))

export default store;