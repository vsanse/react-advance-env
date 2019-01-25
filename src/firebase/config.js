import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const config = {
    apiKey: "****",
    authDomain: "****.firebaseapp.com",
    databaseURL: "****",
    projectId: "***",
    storageBucket: "***.appspot.com",
    messagingSenderId: "111111111111"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const db = firebase.database();
const gProvider = new firebase.auth.GoogleAuthProvider();
export {
  auth,
  db,
  gProvider
};
  