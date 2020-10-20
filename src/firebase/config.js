import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCER9cjgqkSvlSdVQq690-oXs30yo0ksxY",
  authDomain: "image-gallery-be066.firebaseapp.com",
  databaseURL: "https://image-gallery-be066.firebaseio.com",
  projectId: "image-gallery-be066",
  storageBucket: "image-gallery-be066.appspot.com",
  messagingSenderId: "880915861529",
  appId: "1:880915861529:web:6f59bcfd5deb615aa71a88"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
