import * as userActions from "./userActions";

const initialState = {
  id: null,
  avatar: null,
  reating: null,
  name: false,
  calendar: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
        const { id, avatar, name, reating } = action.user
        return {
            ...state,
            id,
            avatar,
            name,
            reating
        }
    case userActions.CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.avatarUrl
      }
    default:
      return state;
  }
};