// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2-YAZYYSgn5LdRlPsI0bOz_CMV9wLdfA",
    authDomain: "cc-payment-596a0.firebaseapp.com",
    projectId: "cc-payment-596a0",
    storageBucket: "cc-payment-596a0.appspot.com",
    messagingSenderId: "810362293947",
    appId: "1:810362293947:web:0dbffee74afb7ce1d4a39e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDBh = getFirestore(FirebaseApp);
