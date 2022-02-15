import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0jxUlO5P794o2bukZUZuJhS-zSFiaBZE",
    authDomain: "moto-app-723b3.firebaseapp.com",
    projectId: "moto-app-723b3",
    storageBucket: "moto-app-723b3.appspot.com",
    messagingSenderId: "1049165266555",
    appId: "1:1049165266555:web:af0e21584370f6beabecde",
    measurementId: "G-5R3T4CGSTR"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}