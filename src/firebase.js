// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDnGS9L8RMQ6H_PnzVpKLqv6Hoyfw0_SYc",
  authDomain: "learnfire1-98ff5.firebaseapp.com",
  projectId: "learnfire1-98ff5",
  storageBucket: "learnfire1-98ff5.firebasestorage.app",
  messagingSenderId: "538587036523",
  appId: "1:538587036523:web:f1632cc964b763cee7aa2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);