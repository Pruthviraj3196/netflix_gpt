// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYVj-DDxQPk04HyyY-6JXx5EMsZpc5ahM",
  authDomain: "netflixgpt-9ebdb.firebaseapp.com",
  projectId: "netflixgpt-9ebdb",
  storageBucket: "netflixgpt-9ebdb.appspot.com",
  messagingSenderId: "956115006478",
  appId: "1:956115006478:web:0d0d6554928270684cf85f",
  measurementId: "G-1THHPJCR4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();