import FB from "../Fierbase/FB";
import * as userActions from './userActions';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ERROR = "SET_ERROR";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";

export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await FB.auth().signInWithEmailAndPassword(
        email,
        password
      );
      const uid = response.user.uid;
      dispatch({
        type: LOGIN,
        uid,
      });
      dispatch(userActions.setUser(uid));
    } catch (error) {
      let errorData = {
        field: null,
        message: null,
      };
      switch (error.code) {
        case "auth/user-not-found":
          errorData.field = "email and password";
          errorData.message = "користувач не знайдений";
          break;
        case "auth/argument-error":
          errorData.field = "email and password";
          errorData.message = "не заповнені поля входу";
          break;
        case "auth/invalid-email":
          errorData.field = "email";
          errorData.message = "не вірний імейл";
          break;
        case "auth/wrong-password":
          errorData.field = "password";
          errorData.message = "не вірний пароль";
          break;
        case "auth/network-request-failed":
        default:
          errorData.field = "email and password";
          if ("auth/network-request-failed") {
            errorData.message = 'не має звязку з інтернетом'
          }
          errorData.message = error.code;
          break;
      }
      dispatch({
        type: SET_ERROR,
        errorData,
      });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    await FB.auth().signOut();
    dispatch({
      type: SET_INITIAL_STATE,
    });
  };
};

export const auth = () => {
  return async (dispatch) => {
    console.log("AUTH ERROR");
    FB.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: LOGIN,
          uid: user.uid,
        });
        dispatch(userActions.setUser(user.uid));
      } else {
        dispatch({
          type: SET_INITIAL_STATE,
        });
      }
    });
  };
};
