import firebase from "firebase";
import "firebase/auth";

export const createOtherUser = async (email, password) => {
  var config = {
    apiKey: "AIzaSyDioTJnfzjDwbAinfzrpv1N7vyM6m-4xxY",
    authDomain: "aloy-it-school.firebaseapp.com",
    projectId: "aloy-it-school",
    storageBucket: "aloy-it-school.appspot.com",
    messagingSenderId: "260161166308",
    appId: "1:260161166308:web:ec9d9d8589710d7afec5f1",
  };
  let secondaryApp = firebase.initializeApp(config, "secondary");
  
  const uid = await secondaryApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user.uid;
    });
  secondaryApp.auth().signOut();
  secondaryApp.delete();
  return uid;
};
