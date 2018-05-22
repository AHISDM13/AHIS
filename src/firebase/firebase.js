import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDY_ryPHq63LYeDgQX0YRFNJ1c23RNki5A",
  authDomain: "ahis-770c1.firebaseapp.com",
  databaseURL: "https://ahis-770c1.firebaseio.com",
  projectId: "ahis-770c1",
  storageBucket: "",
  messagingSenderId: "532947863120"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
