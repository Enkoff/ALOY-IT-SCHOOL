import * as userActions from "./userActions";

const initialState = {
  id: null,
  avatar: null,
  reating: null,
  name: false,
  calendar: null,
  role: null,
  reatingUsersData: null,
  userReatingAverage: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      const { id, avatar, name, reating, role } = action.user;
      return {
        ...state,
        id,
        avatar,
        name,
        reating,
        role,
      };
    case userActions.CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.avatarUrl,
      };
    case userActions.SET_CALENDAR_DATA:
      return {
        ...state,
        calendar: action.calendarData,
      };
    case userActions.SET_USER_REATING:
      return {
        ...state,
        reatingUsersData: action.sortUserReating,
        userReatingAverage: action.userReatingAverage
      };
    default:
      return state;
  }
};
