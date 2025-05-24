// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQqX6KOrpN7fIZ-7y0Q_XwdeeAxARXsqQ",
  authDomain: "job-portal-9a9df.firebaseapp.com",
  projectId: "job-portal-9a9df",
  storageBucket: "job-portal-9a9df.firebasestorage.app",
  messagingSenderId: "1002692640330",
  appId: "1:1002692640330:web:f16bb3b9bc7949625bf0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;