// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c7e7d.firebaseapp.com",
  projectId: "mern-blog-c7e7d",
  storageBucket: "mern-blog-c7e7d.firebasestorage.app",
  messagingSenderId: "185641370989",
  appId: "1:185641370989:web:987b02dc341efff7398664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

