// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-cebd3.firebaseapp.com",
  projectId: "blog-app-cebd3",
  storageBucket: "blog-app-cebd3.appspot.com",
  messagingSenderId: "430287846891",
  appId: "1:430287846891:web:2fbeddc4ccc003f165edae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

