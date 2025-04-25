/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyBYsoLN30u11q92gAuZ1nFUpTWOCnENrC8',
   authDomain: 'netflix-gpt-2cf79.firebaseapp.com',
   projectId: 'netflix-gpt-2cf79',
   storageBucket: 'netflix-gpt-2cf79.firebasestorage.app',
   messagingSenderId: '231806223971',
   appId: '1:231806223971:web:2145c7b5bcc5fc8b475a56',
   measurementId: 'G-7M064FQR0Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
