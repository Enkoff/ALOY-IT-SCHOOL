import axios from "axios";

export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR_MESSAGES = "CLEAR_ERROR_MESSAGES";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";

export const setUserData = (email, password) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://social-network.samuraijs.com/api/1.0/auth/login",
      { email, password }, {withCredentials: true}
    );

    if (response.data.resultCode === 0) {
      const userId = response.data.data.userId;
      dispatch({
        type: SET_USER,
        userId,
      });
    } else {
      dispatch({
        type: SET_ERROR,
        errorMessages: response.data.fieldsErrors.length === 0 ? response.data.messages : response.data.fieldsErrors,
      });
    }
  };
};
export const clearErrorMessage = () => ({ type: CLEAR_ERROR_MESSAGES });

export const logOut = () => {
  return async (dispatch) => {
    const response = await axios.delete(
      "https://social-network.samuraijs.com/api/1.0/auth/login",{ withCredentials: true }
    );
    if (response.data.resultCode === 0) {
      dispatch({ type: SET_INITIAL_STATE });
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://social-network.samuraijs.com/api/1.0//auth/me",
      { withCredentials: true }
    );
    if (response.data.resultCode === 0) {
      const userId = response.data.data.id;
      dispatch({
        type: SET_USER,
        userId,
      });
    }
  };
};
