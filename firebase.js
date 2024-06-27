// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvw6VqBVeP3XWn0lByyxC4TVZjxx8dgRo",
  authDomain: "backoffice-volkswagen.firebaseapp.com",
  projectId: "backoffice-volkswagen",
  storageBucket: "backoffice-volkswagen.appspot.com",
  messagingSenderId: "461044018413",
  appId: "1:461044018413:web:845a003061c253c6b870e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);
export default firestore;
export const auth = getAuth();