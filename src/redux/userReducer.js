import * as userActions from "./userActions";

const initialState = {
  userId: null,
  userName: null,
  userImage: null,
  errorMessages: null,
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        ...state,
        isAuth: true,
        errorMessages: null,
        userId: action.userId,
      };
    case userActions.SET_ERROR:
      return {
        ...state,
        errorMessages: action.errorMessages,
        isAuth: false,
      };
    case userActions.CLEAR_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: null,
      };
    case userActions.SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};
