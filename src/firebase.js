import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyAX3h-f75aoMupiHHsRXo-41jDIQAczgS4",
  authDomain: "sahkari-556e4.firebaseapp.com",
  projectId: "sahkari-556e4",
  storageBucket: "sahkari-556e4.appspot.com",
  messagingSenderId: "408813063899",
  appId: "1:408813063899:web:c55d641d53a6cc9c0886fe"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }