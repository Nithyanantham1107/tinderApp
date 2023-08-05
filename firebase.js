// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,EmailAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDr9ehblgKLtsQ6M_NKwyBBORCwjV97Zag",
  authDomain: "tinderapp-89400.firebaseapp.com",
  projectId: "tinderapp-89400",
  storageBucket: "tinderapp-89400.appspot.com",
  messagingSenderId: "908633610480",
  appId: "1:908633610480:web:cab55756eb7ce1d4500a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const provider= new EmailAuthProvider();
export{app,auth,provider};