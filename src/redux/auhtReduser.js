import * as authActions from "./authActions";

const initialState = {
  uid: null,
  errorData: null,
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        ...state,
        errorMessage: null,
        role: action.role,
        uid: action.uid,
        isAuth: true,
      };
    case authActions.SET_ERROR:
      return {
        ...state,
        isAuth: false,
        errorData: action.errorData,
        uid: null,
      };
    case authActions.SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};
