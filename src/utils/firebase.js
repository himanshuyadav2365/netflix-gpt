// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZgrt88v1m6JdPWpyOAfaxmN5mL5hh1ng",
  authDomain: "netflix-gpt-c10ce.firebaseapp.com",
  projectId: "netflix-gpt-c10ce",
  storageBucket: "netflix-gpt-c10ce.appspot.com",
  messagingSenderId: "4855075106",
  appId: "1:4855075106:web:100f742b12298d07edd57b",
  measurementId: "G-S7WP7PLQ27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()