import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCow_QIWNKrErVRZMh91e3RfsN-c_adqQI",
  authDomain: "ai-trip-planner-a078e.firebaseapp.com",
  projectId: "ai-trip-planner-a078e",
  storageBucket: "ai-trip-planner-a078e.firebasestorage.app",
  messagingSenderId: "820752040467",
  appId: "1:820752040467:web:a53cadcbbde8440a2eb5e6",
  measurementId: "G-6Z9J5RD7HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
