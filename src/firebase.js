// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARyzwx8JuIGWFpNflDjkHvChyyrl_G1QM",
  authDomain: "lanahub-f3079.firebaseapp.com",
  projectId: "lanahub-f3079",
  storageBucket: "lanahub-f3079.firebasestorage.app",
  messagingSenderId: "1034290621711",
  appId: "1:1034290621711:web:145e7ad2fffe5d8ed9a27a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore export (for saving profiles)
export const db = getFirestore(app);

// Email‑link (magic link) action settings
export const actionCodeSettings = {
  // After email link click, return them here:
  url: window.location.origin + "/auth",
  handleCodeInApp: true
};
