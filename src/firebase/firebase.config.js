// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCte28nlEIaHuYLxsqKxp_Cgdv-InevkzI",
  authDomain: "business-blast.firebaseapp.com",
  projectId: "business-blast",
  storageBucket: "business-blast.appspot.com",
  messagingSenderId: "510038902668",
  appId: "1:510038902668:web:01b584d38894b17af078a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
