import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-9b71a.firebaseapp.com",
  projectId: "loginvirtualcourses-9b71a",
  storageBucket: "loginvirtualcourses-9b71a.firebasestorage.app",
  messagingSenderId: "132945274749",
  appId: "1:132945274749:web:016684e3575b1b68c74e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}