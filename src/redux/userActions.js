import FB from '../Fierbase/FB';
export const SET_USER = 'SET_USER';

export const setUser = (uid) => {
    return async (dispatch) => {
        const db = FB.firestore();
        const user = await (await db.collection('users').doc(`${uid}`).get()).data();
        
        dispatch({
            type: SET_USER,
            user
        });
    }
}