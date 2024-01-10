// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5kmsILj1xzgggzMHoMqKKs8MJfC0g20c",
  authDomain: "portfolio-210ca.firebaseapp.com",
  projectId: "portfolio-210ca",
  storageBucket: "portfolio-210ca.appspot.com",
  messagingSenderId: "912187587563",
  appId: "1:912187587563:web:264c12870ff06f549737ae",
  measurementId: "G-QV8Q49S1V4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
