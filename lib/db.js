import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectID,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const firestore = firebase.firestore();
const auth = firebase.auth();

// named export
export { firebase, auth, firestore };
