import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDY_ryPHq63LYeDgQX0YRFNJ1c23RNki5A",
  authDomain: "ahis-770c1.firebaseapp.com",
  databaseURL: "https://ahis-770c1.firebaseio.com",
  projectId: "ahis-770c1",
  storageBucket: "",
  messagingSenderId: "532947863120"
};

// const prodConfig = {
//     apiKey: YOUR_API_KEY,
//     authDomain: YOUR_AUTH_DOMAIN,
//     databaseURL: YOUR_DATABASE_URL,
//     projectId: YOUR_PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   };

//   const devConfig = {
//     apiKey: YOUR_API_KEY,
//     authDomain: YOUR_AUTH_DOMAIN,
//     databaseURL: YOUR_DATABASE_URL,
//     projectId: YOUR_PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   };

//   const config = process.env.NODE_ENV === 'production'
//     ? prodConfig
//     : devConfig;

/////On the Firebase website, you could create a second project. Afterward, your first project could be used as your development database and your second project as your production database. That way, you never mix up your data from development mode with your data from your deployed application (production mode). The step is optional.
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
