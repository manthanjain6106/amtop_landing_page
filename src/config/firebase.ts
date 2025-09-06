import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SU4jLWMTsbwhhl1HoBxwzrI8LaSmnjY",
  authDomain: "amtop-7df0d.firebaseapp.com",
  projectId: "amtop-7df0d",
  storageBucket: "amtop-7df0d.firebasestorage.app",
  messagingSenderId: "683212606177",
  appId: "1:683212606177:web:6281e6b316d1092f8045a0",
  measurementId: "G-YP0C66P642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Functions
export const functions = getFunctions(app);

// Email function
export const sendContactEmail = httpsCallable(functions, 'sendContactEmail');

export default app;
