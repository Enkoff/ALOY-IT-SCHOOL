import FB from "../Fierbase/FB";
import { createOtherUser, deleteUser } from "../module/firebaseFunnction";
import { v4 as uuidv4 } from "uuid";

const BREAK_NAME = "Перерва";

export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_USER";
export const ADD_CALENDAR_DATA = "ADD_CALENDAR_DATA";
export const DELETE_USER = "DELETE_USER";
export const ADD_RATING = "ADD_RATING";
export const DELETE_RANG_ITEM = "DELETE_RANG_ITEM";
export const ADD_HOME_WORK_ITEM = "ADD_HOME_WORK_ITEM";
export const DELET_HOME_WORK_ITEM = "DELET_HOME_WORK_ITEM";

export const addUser = (email, password, name, role) => {
  return async (dispatch) => {
    //Додаю нового користувача створюючи новий канал з FIREBASE
    const uid = await createOtherUser(email, password);
    //
    const newUser = {
      id: uid,
      email,
      password,
      name,
      role: role.toLowerCase(),
      avatar:
        "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
      reating: [],
      homeWork: [],
      totalNumberPoints: 1,
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
      if (el.data().role !== "admin") {
        groups.push(el.data().role);
      }
    });
    dispatch({
      type: SET_USERS,
      users: userArray,
      groups: (groups = [...new Set(groups)]),
    });
  };
};

export const deleteUserAuth = (email, password) => {
  return async () => {
    await deleteUser(email, password);
  };
};

export const deleteUserInFirestore = (uid) => {
  return async (dispatch) => {
    await FB.firestore().collection("users").doc(`${uid}`).delete();
    dispatch({
      type: DELETE_USER,
      uid,
    });
  };
};

export const addRating = (
  uid,
  date,
  subject,
  lesson,
  estimation,
  author,
  isLesson
) => {
  const estimationNumber = Number(estimation);
  return async (dispatch) => {
    const docId = uuidv4();

    const newObj = {
      id: docId,
      date,
      subject,
      lesson,
      isLesson,
      estimation: isNaN(estimationNumber) ? "Пропуск" : estimationNumber,
      author,
    };

    let totalNumberPoints = (
      await FB.firestore().collection("users").doc(uid).get()
    ).data().totalNumberPoints;

    if (!isNaN(estimationNumber)) {
      totalNumberPoints += estimationNumber;
    }

    FB.firestore()
      .collection("users")
      .doc(`${uid}`)
      .update({
        reating: FB.firestore.FieldValue.arrayUnion(newObj),
        totalNumberPoints: isLesson ? totalNumberPoints + 2 : totalNumberPoints,
      });
    dispatch({
      type: ADD_RATING,
      uid,
      newObj,
      totalNumberPoints: isLesson ? totalNumberPoints + 2 : totalNumberPoints,
    });
  };
};

export const deleteRaitingItem = (uid, reatingItemId, estimation, isLesson) => {
  return async (dispatch) => {
    const reating = (
      await FB.firestore().collection("users").doc(uid).get()
    ).data().reating;
    const newReating = reating.filter((el) => el.id !== reatingItemId);

    let totalNumberPoints = (
      await FB.firestore().collection("users").doc(uid).get()
    ).data().totalNumberPoints;

    if (estimation !== "Пропуск") {
      if (isLesson) {
        totalNumberPoints = totalNumberPoints - estimation - 2;
      } else {
        totalNumberPoints -= estimation;
      }
    }
    await FB.firestore().collection("users").doc(`${uid}`).update({
      reating: newReating,
      totalNumberPoints: totalNumberPoints,
    });

    dispatch({
      type: DELETE_RANG_ITEM,
      uid,
      newReating,
      totalNumberPoints,
    });
  };
};

export const addHomeWorkItem = (
  uid,
  date,
  subject,
  nameHomeWork,
  estimation,
  author
) => {
  return async (dispatch) => {
    const estimationNumber = Number(estimation);

    const homeWorkObj = {
      id: uuidv4(),
      date,
      subject,
      nameHomeWork,
      estimation: isNaN(estimationNumber) ? "Не виконано" : estimationNumber,
      author,
    };

    FB.firestore()
      .collection("users")
      .doc(`${uid}`)
      .update({
        homeWork: FB.firestore.FieldValue.arrayUnion(homeWorkObj),
      });
    dispatch({
      type: ADD_HOME_WORK_ITEM,
      uid,
      homeWorkObj,
    });
  };
};

export const deleteHomeWorkItem = (uid, homeWorkItemId) => {
  return async (dispatch) => {
    const homeWork = (
      await FB.firestore().collection("users").doc(uid).get()
    ).data().homeWork;

    const newHomeWork = homeWork.filter((el) => el.id !== homeWorkItemId);

    await FB.firestore().collection("users").doc(`${uid}`).update({
      homeWork: newHomeWork,
    });
    dispatch({
      type: DELET_HOME_WORK_ITEM,
      uid,
      newHomeWork,
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
          title: `1. ${
            dayLessonsName === "" ? "Основи програмування" : dayLessonsName
          }`,
          date,
          className: ["day-lessons-name"],
        },
        {
          title: `2. ${teacher === "" ? "Андрій Лось та Олег Єнько" : teacher}`,
          date,
          className: ["teacher"],
        },
        {
          title: `3. ${lessonOneTime === "" ? "09:00-10:00" : lessonOneTime} ${
            lessonOneName === "" ? "HTML" : lessonOneName
          }`,
          date,
          className: ["lesson"],
        },
        {
          title: `4. ${breakOneTime === "" ? "10:00-10:15" : breakOneTime} ${
            breakOneName === "" ? BREAK_NAME : breakOneName
          }`,
          date,
          className: ["break"],
        },
        {
          title: `5. ${lessonTwoTime === "" ? "10:15-11:15" : lessonTwoTime} ${
            lessonTwoName === "" ? "CSS" : lessonTwoName
          }`,
          date,
          className: ["lesson"],
        },
        {
          title: `6. ${breakTwoTime === "" ? "11:15-11:30" : breakTwoTime} ${
            breakTwoName === "" ? BREAK_NAME : breakTwoName
          }`,
          date,
          className: ["break"],
        },
        {
          title: `7. ${
            lessonThreeTime === "" ? "11:30-12:30" : lessonThreeTime
          } ${lessonThreeName === "" ? "JS" : lessonThreeName}`,
          date,
          className: ["lesson"],
        },
      ],
    };
    FB.firestore()
      .collection("calendar")
      .doc(collectionGroupName)
      .collection(`${collectionDate === "" ? "2021" : collectionDate}`)
      .doc(`${date}`)
      .set(object);
  };
};
