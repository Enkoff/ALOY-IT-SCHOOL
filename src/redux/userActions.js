import FB from "../Fierbase/FB";
import { average } from "../module/avarage";

export const SET_USER = "SET_USER";
export const CHANGE_AVATAR = "CHANGE_AVATAR";
export const SET_CALENDAR_DATA = "SET_CALENDAR_DATA";
export const SET_USER_REATING = "SET_USER_REATING";

export const setUser = (uid) => {
  return async (dispatch) => {
    const db = FB.firestore();
    const user = await (
      await db.collection("users").doc(`${uid}`).get()
    ).data();
    dispatch({
      type: SET_USER,
      user,
    });
  };
};

export const changeAvatar = (id, oldAvatarUrl, newAvatarRef) => {
  return async (dispatch) => {
    //Додаю новий аватар
    const storageRef = FB.storage().ref();
    const imgRef = storageRef.child(
      `usersAvatar/${newAvatarRef.current.files[0].name}`
    );
    await imgRef.put(newAvatarRef.current.files[0]);
    //ДОДАЮ КОРІСТУВАЧУ НОВІЙ АВАТАР
    const avatarUrl = await imgRef.getDownloadURL();
    await FB.firestore()
      .collection("users")
      .doc(id)
      .update({ avatar: avatarUrl });
    //Видалив попередній аватар
    if (oldAvatarUrl !== null) {
      const oldImgRef = FB.storage().refFromURL(`${oldAvatarUrl}`);
      oldImgRef.delete();
    }
    dispatch({
      type: CHANGE_AVATAR,
      avatarUrl,
    });
  };
};

export const getClalendarData = (role) => {
  return async (dispatch) => {
    //ЗАМІНИТИ КОНСТАНТУ РОКУ
    let newArray = [];
    const calendarData = await FB.firestore()
      .collection("calendar")
      .doc(`${role}`)
      .collection("2021")
      .get();
    calendarData.docs.forEach((el) => {
      newArray.push(...el.data().calendarData);
    });
    dispatch({
      type: SET_CALENDAR_DATA,
      calendarData: newArray,
    });
  };
};

export const getUsersReating = (id, role) => {
  return async (dispatch) => {
    let newUsersArray = [];
    let userReatingAverage;

    const users = await FB.firestore().collection("users").get();
    await users.forEach((u) => {
      if (u.data().role === role) {
        newUsersArray.push(u.data());
      }
      if (u.data().id === id) {
        userReatingAverage = average(u.data().reating).toFixed(1);
      }
    });

    newUsersArray.sort((a, b) => average(b.reating) - average(a.reating));
 
    dispatch({
      type: SET_USER_REATING,
      sortUserReating: newUsersArray,
      userReatingAverage
    })

  };
};
