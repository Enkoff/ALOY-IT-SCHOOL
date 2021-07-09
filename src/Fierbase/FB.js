import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDioTJnfzjDwbAinfzrpv1N7vyM6m-4xxY",
  authDomain: "aloy-it-school.firebaseapp.com",
  projectId: "aloy-it-school",
  storageBucket: "aloy-it-school.appspot.com",
  messagingSenderId: "260161166308",
  appId: "1:260161166308:web:ec9d9d8589710d7afec5f1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;