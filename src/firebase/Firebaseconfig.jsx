// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKf5ssWrnrx1u0_Iz2VZ9AysKDSjcRlzE",
  authDomain: "ecommerce-2b8e0.firebaseapp.com",
  projectId: "ecommerce-2b8e0",
  storageBucket: "ecommerce-2b8e0.appspot.com",
  messagingSenderId: "386362166007",
  appId: "1:386362166007:web:d0d5e7d859a9cf57c1e1f2",
  measurementId: "G-8RYB2B0QWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app)

export {firestore,auth}