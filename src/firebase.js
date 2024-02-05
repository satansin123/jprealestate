// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3IduEjY8jiTcCEOLk7B-1Mhu0-RS9tyY",
  authDomain: "realtor-d4c94.firebaseapp.com",
  projectId: "realtor-d4c94",
  storageBucket: "realtor-d4c94.appspot.com",
  messagingSenderId: "313913964923",
  appId: "1:313913964923:web:c01e013f2e38caddcee5de",
  measurementId: "G-88GKETXB6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
