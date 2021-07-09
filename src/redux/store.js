import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from './auhtReduser';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
