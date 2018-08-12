import * as firebase from "firebase";
// import mountains from "./images/mountains.jpg";
const config = {
  apiKey: "AIzaSyCgfpNHxWKgf63GefD-sMR7JR-_Z015erA",
    authDomain: "nitos-50cb4.firebaseapp.com",
    databaseURL: "https://nitos-50cb4.firebaseio.com",
    projectId: "nitos-50cb4",
    storageBucket: "gs://nitos-50cb4.appspot.com",
    messagingSenderId: "621799230195"
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
