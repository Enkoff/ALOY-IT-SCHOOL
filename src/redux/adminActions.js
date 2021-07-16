import FB from "../Fierbase/FB";

const BREAK_NAME = "Перерва";

export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_USER";
export const ADD_CALENDAR_DATA = "ADD_CALENDAR_DATA";


export const addUser = (email, password, name, role) => {
  return async (dispatch) => {
    const respons = await FB.auth().createUserWithEmailAndPassword(
      email,
      password
    );
    const uid = respons.user.uid;

    const newUser = {
      id: uid,
      email,
      name,
      role: role.toLowerCase(),
      avatar: null,
      reating: [],
    };
    await FB.firestore().collection("users").doc(uid).set(newUser);
  };
};
export const setUsers = () => {
  return async (dispatch) => {
    const userArray = [];
    let groups = [];
    const response = await FB.firestore().collection("users").get();

    response.docs.forEach((el) => {
      userArray.push(el.data());
      groups.push(el.data().role);
    });

    dispatch({
      type: SET_USERS,
      users: userArray,
      groups: (groups = [...new Set(groups)]),
    });
  };
};

export const addCalendarData = (
  collectionGroupName,
  collectionDate,
  date,
  dayLessonsName,
  teacher,
  lessonOneTime,
  lessonOneName,
  breakOneTime,
  breakOneName,
  lessonTwoTime,
  lessonTwoName,
  breakTwoTime,
  breakTwoName,
  lessonThreeTime,
  lessonThreeName
) => {

  return async (dispatch) => {
    const object = {
      calendarData: [
        {
          title: `1. ${dayLessonsName === '' ? "Основи програмування" : dayLessonsName}`,
          date,
          className: ["day-lessons-name"],
        },
        {
          title: `2. ${teacher === '' ? "Андрій Лось та Олег Єнько"  : teacher}`,
          date,
          className: ["teacher"],
        },
        {
          title: `3. ${lessonOneTime === '' ? "09:00-10:00" : lessonOneTime} ${lessonOneName === '' ? "HTML" : lessonOneName}`,
          date,
          className: ["lesson"],
        },
        {
          title: `4. ${breakOneTime === '' ? "10:00-10:15" : breakOneTime} ${breakOneName === '' ? BREAK_NAME : breakOneName}`,
          date,
          className: ["break"],
        },
        {
          title: `5. ${lessonTwoTime === '' ? "10:15-11:15" : lessonTwoTime} ${lessonTwoName === '' ? "CSS" : lessonTwoName}`,
          date,
          className: ["lesson"],
        },
        {
          title: `6. ${breakTwoTime === '' ? "11:15-11:30" : breakTwoTime} ${breakTwoName === '' ? BREAK_NAME : breakTwoName}`,
          date,
          className: ["break"],
        },
        {
          title: `7. ${lessonThreeTime === '' ? "11:30-12:30" : lessonThreeTime} ${lessonThreeName === '' ? "JS" : lessonThreeName}`,
          date,
          className: ["lesson"],
        },
      ],
    };
    FB.firestore()
    .collection("calendar")
    .doc(collectionGroupName)
    .collection(`${collectionDate === '' ? '2021' : collectionDate}`)
    .doc(`${date}`)
    .set(object);
  };
};
