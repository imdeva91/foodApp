// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvTkv1nFWAW7xAwQq8N_g0PkrBi6i_aEg",
  authDomain: "food-app-with-firebase-ae15a.firebaseapp.com",
  projectId: "food-app-with-firebase-ae15a",
  storageBucket: "food-app-with-firebase-ae15a.appspot.com",
  messagingSenderId: "886108080090",
  appId: "1:886108080090:web:43d181339dde4e191a22e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const db = getFirestore(app);
export default app;