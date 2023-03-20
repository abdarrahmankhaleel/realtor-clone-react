// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6E7w_KAHLUaMiVgEKAYru1gNqiW6M0EU",
  authDomain: "realtor-clone-react-d1f20.firebaseapp.com",
  projectId: "realtor-clone-react-d1f20",
  storageBucket: "realtor-clone-react-d1f20.appspot.com",
  messagingSenderId: "834160431873",
  appId: "1:834160431873:web:b2180daab55cae69790100"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();