// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIZiKxHleO2zIHkTadV4MjIhjqhww6e74",
  authDomain: "chat-app-3b07d.firebaseapp.com",
  projectId: "chat-app-3b07d",
  storageBucket: "chat-app-3b07d.appspot.com",
  messagingSenderId: "434404616806",
  appId: "1:434404616806:web:299a98206e5d853c971ba7",
  measurementId: "G-TS4FHMX0KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
