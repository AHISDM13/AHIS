import * as firebase from "firebase";
// import mountains from "./images/mountains.jpg";
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

// // Points to the root reference
// var storageRef = firebase.storage().ref();

// // Points to 'images'
// var imagesRef = storageRef.child('images');

// // Points to 'images/space.jpg'
// // Note that you can use variables to create child values
// var fileName = 'space.jpg';
// var spaceRef = imagesRef.child(fileName);

// // File path is 'images/space.jpg'
// var path = spaceRef.fullPath

// // File name is 'space.jpg'
// var name = spaceRef.name

// // Points to 'images'
// var imagesRef = spaceRef.parent;
