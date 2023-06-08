// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxHZGOUhT029fahLatF4V1SgLWewk93us",
  authDomain: "library-9db37.firebaseapp.com",
  projectId: "library-9db37",
  storageBucket: "library-9db37.appspot.com",
  messagingSenderId: "577973365863",
  appId: "1:577973365863:web:b3ca0ac527e32b13d7b8c2",
  measurementId: "G-W0NW00WDM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export {
    firestore
}