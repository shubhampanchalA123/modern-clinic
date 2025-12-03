// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-sfCC3GgeuZHfsZ8ft8a1Sfy3D-2SGec",
  authDomain: "modernclinic-5ef30.firebaseapp.com",
  projectId: "modernclinic-5ef30",
  storageBucket: "modernclinic-5ef30.firebasestorage.app",
  messagingSenderId: "779266766038",
  appId: "1:779266766038:web:40875ef21f586091518577",
  measurementId: "G-4RY9HVV8XL"
};

// IMPORTANT:
// Prevent initialization errors during Next.js hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Auth must be created AFTER app is initialized
const auth = getAuth(app);

// Analytics must run only in browser
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, auth, analytics };
