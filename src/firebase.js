// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-hMawNOYwuEb7SX7gOimG0hDaJcbH_eI",
  authDomain: "upwork-75d81.firebaseapp.com",
  databaseURL: "https://upwork-75d81-default-rtdb.firebaseio.com",
  projectId: "upwork-75d81",
  storageBucket: "upwork-75d81.appspot.com",
  messagingSenderId: "386706820447",
  appId: "1:386706820447:web:a5c818b562523ec05cfaea",
  measurementId: "G-4S7D6SCYGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };
