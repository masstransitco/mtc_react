// src/components/GoogleSignIn.jsx

import React from 'react';
import { auth, googleProvider } from '../services/firebase';

const GoogleSignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).catch((error) => {
      console.error('Google Sign-In Error:', error);
    });
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default GoogleSignIn;
