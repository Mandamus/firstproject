// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyv3W5E-js7AWOfYTJ0QRxKAzhcOJGOwU",
  authDomain: "firstproject-14e60.firebaseapp.com",
  projectId: "firstproject-14e60",
  storageBucket: "firstproject-14e60.firebasestorage.app",
  messagingSenderId: "121674966309",
  appId: "1:121674966309:web:0087e4d593a2750a47e6cc",
  measurementId: "G-5L95T5QC5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);