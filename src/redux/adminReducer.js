import * as adminActions from "./adminActions";

const initialState = {
  users: null,
  groups: null,
  calendarData: null
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminActions.SET_USERS:
      return {
        users: action.users,
        groups: action.groups
      }
    default:
      return state;
  }
};
