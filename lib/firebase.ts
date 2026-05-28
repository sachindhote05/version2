import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
   apiKey: "AIzaSyDn4sv2YQQEQ-fgA36_Ahz6e6Sy1EsCnKs",
  authDomain: "version2-e8d2a.firebaseapp.com",
  projectId: "version2-e8d2a",
  storageBucket: "version2-e8d2a.firebasestorage.app",
  messagingSenderId: "995633227697",
  appId: "1:995633227697:web:f3050f8de3d53194bdbf90",
  measurementId: "G-BMZJ3V6WTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);