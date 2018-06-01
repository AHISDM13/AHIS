import * as firebase from "firebase";
import mountains from "./images/mountains.jpg";
const config = {
  apiKey: "AIzaSyDY_ryPHq63LYeDgQX0YRFNJ1c23RNki5A",
  authDomain: "ahis-770c1.firebaseapp.com",
  databaseURL: "https://ahis-770c1.firebaseio.com",
  projectId: "ahis-770c1",
  storageBucket: "ahis-770c1.appspot.com",
  messagingSenderId: "532947863120"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
