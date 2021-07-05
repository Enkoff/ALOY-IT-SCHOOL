import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
