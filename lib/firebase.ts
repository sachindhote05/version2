import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAk968eNqc0x7Q9iG0bBtnCBgEz70XVhBQ",
  authDomain: "version2-b0eb9.firebaseapp.com",
  projectId: "version2-b0eb9",
  storageBucket: "version2-b0eb9.firebasestorage.app",
  messagingSenderId: "848391473072",
  appId: "1:848391473072:web:faee3b14d26dc02a5b7875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ VERY IMPORTANT (ye hi missing tha)
export const auth = getAuth(app);