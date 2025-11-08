// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsnvxWoS-vQipFFpUmASH0qf_O2t2IBkc",
  authDomain: "buy-sell-smart-deals-project.firebaseapp.com",
  projectId: "buy-sell-smart-deals-project",
  storageBucket: "buy-sell-smart-deals-project.firebasestorage.app",
  messagingSenderId: "541418125583",
  appId: "1:541418125583:web:e4b1d836947340f472667a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

