// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj46uOcP-Y4T3X2ZpdlWt4_PxUWCTFwyM",
  authDomain: "masstransitcompany.firebaseapp.com",
  projectId: "masstransitcompany",
  storageBucket: "masstransitcompany.firebasestorage.app",
  messagingSenderId: "1039705984668",
  appId: "1:1039705984668:web:e85aafd14917825b3d6759",
  measurementId: "G-NMMQLPBJD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.error("Google Sign-In error:", error);
    throw error;
  }
};
