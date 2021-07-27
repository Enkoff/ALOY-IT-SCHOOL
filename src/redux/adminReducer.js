import * as adminActions from "./adminActions";

const initialState = {
  users: null,
  groups: null,
  teachers: null,
  discipline: null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminActions.SET_USERS:
      return {
        users: action.users.sort(
          (a, b) => b.totalNumberPoints - a.totalNumberPoints
        ),
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
          el.totalNumberPoints = +action.totalNumberPoints;
        }
        return el;
      });
      return {
        ...state,
        users,
      };
    case adminActions.DELETE_RANG_ITEM:
      let usersCopy = JSON.parse(JSON.stringify(state.users));
      usersCopy = usersCopy.map((el) => {
        if (el.id === action.uid) {
          el.reating = action.newReating;
          el.totalNumberPoints = action.totalNumberPoints;
        }
        return el;
      });

      return {
        ...state,
        users: usersCopy,
      };
    case adminActions.ADD_HOME_WORK_ITEM:
      let usersCopy2 = JSON.parse(JSON.stringify(state.users));

      usersCopy2 = usersCopy2.map((el) => {
        if (el.id === action.uid) {
          el.homeWork = [...el.homeWork, action.homeWorkObj];
        }
        return el;
      });
      return {
        ...state,
        users: usersCopy2,
      };
    case adminActions.DELET_HOME_WORK_ITEM:
      let usersCopy3 = JSON.parse(JSON.stringify(state.users));
      usersCopy3 = usersCopy3.map((el) => {
        if (el.id === action.uid) {
          el.homeWork = action.newHomeWork;
        }
        return el;
      });
      return {
        ...state,
        users: usersCopy3,
      };
    case adminActions.SET_TEACHERS_AND_DISCIPLINE:
      return {
        ...state,
        teachers: action.teachers,
        discipline: action.discipline,
      };
    case adminActions.ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.teacher],
      };
    case adminActions.ADD_DISCIPLINE:
      return {
        ...state,
        discipline: [...state.discipline, action.discipline],
      };
    case adminActions.DELETE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.filter(el => el.id !== action.teachersId),
      };

      case adminActions.DELETE_DISCIPLINE:
        return {
          ...state,
          discipline: state.discipline.filter(el => el.id !== action.disciplineId),
        };
    default:
      return state;
  }
};
