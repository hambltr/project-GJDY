// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbYWkpASvFKbBXlhp5PjHb9klGQ3_SYKE",
  authDomain: "semitest-59c0a.firebaseapp.com",
  projectId: "semitest-59c0a",
  storageBucket: "semitest-59c0a.appspot.com",
  messagingSenderId: "153045066653",
  appId: "1:153045066653:web:af4681cbd2fe549a5b4574",
  measurementId: "G-PTJ49RCDSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
