// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdi5tSIfccyO205cmTjgYl7chHR__bjs4",
  authDomain: "flock-social-demo.firebaseapp.com",
  projectId: "flock-social-demo",
  storageBucket: "flock-social-demo.appspot.com",
  messagingSenderId: "889699079696",
  appId: "1:889699079696:web:8212c712e061c40b9d9c95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
