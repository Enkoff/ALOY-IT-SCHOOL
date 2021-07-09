import * as userActions from "./userActions";

const initialState = {
  id: null,
  avatar: null,
  name: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
        const { id, avatar, name } = action.user
        return {
            ...state,
            id,
            avatar,
            name
        }
    default:
      return state;
  }
};