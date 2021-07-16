import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from './auhtReduser';
import { adminReducer } from './adminReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer,
  admin: adminReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
