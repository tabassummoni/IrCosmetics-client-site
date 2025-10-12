// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUaRLPpCkLY1v2G_Gttmkxg0f-U2c9DoI",
  authDomain: "my-app-d0436.firebaseapp.com",
  projectId: "my-app-d0436",
  storageBucket: "my-app-d0436.firebasestorage.app",
  messagingSenderId: "609086568256",
  appId: "1:609086568256:web:d65354be81a12a18ebaca5",
  measurementId: "G-ZBVXYK96NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// apiKey: import.meta.env.REACT_APP_apiKey,
// authDomain: import.meta.env.REACT_APP_authDomain,
// projectId: import.meta.env.REACT_APP_projectId,
// storageBucket: import.meta.env.REACT_APP_storageBucket,
// messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
// appId: import.meta.env.REACT_APP_appId,