import * as adminActions from "./adminActions";

const initialState = {
  users: null,
  groups: null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminActions.SET_USERS:
      return {
        users: action.users,
        groups: action.groups,
        totalNumberPoints: action.users.totalNumberPoints,
      };
    case adminActions.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.uid),
      };
    case adminActions.ADD_RATING:
      let users = JSON.parse(JSON.stringify(state.users));

      users = users.map((el) => {
        if (el.id === action.uid) {
          el.reating = [...el.reating, action.newObj];
          el.totalNumberPoints =+ action.totalNumberPoints;
          if (action.omissions) {
            el.omissions = [...el.omissions, action.omissions];
          }
        }
        return el;
      });
      return {
        ...state,
        users,
      };
    case adminActions.DELETE_RANG_ITEM:
      let usersCopy = JSON.parse(JSON.stringify(state.users));
          usersCopy = usersCopy.map(el => {
            if (el.id === action.uid) {
              el.reating = action.newReating
              el.omissions = action.newOmissions
              el.totalNumberPoints = action.totalNumberPoints
            }
            return el;
          })

      return {
        ...state,
        users: usersCopy
      };

    default:
      return state;
  }
};
