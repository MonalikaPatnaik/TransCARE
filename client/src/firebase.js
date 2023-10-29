
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACOoY8uCZ-qoZiAbTYzObqGBiXSHN5gqI",
  authDomain: "transcare-c34d6.firebaseapp.com",
  projectId: "transcare-c34d6",
  storageBucket: "transcare-c34d6.appspot.com",
  messagingSenderId: "300353888299",
  appId: "1:300353888299:web:a348c44568a5d78eb84a6e",
  measurementId: "G-DCRLX2QNV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};