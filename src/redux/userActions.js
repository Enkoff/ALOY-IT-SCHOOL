import FB from "../Fierbase/FB";

export const SET_USER = "SET_USER";
export const CHANGE_AVATAR = "CHANGE_AVATAR";

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
