// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNEHleUqb8eSulqUVik3K8LT00Y-NAM1s",
    authDomain: "modowedding-e8a93.firebaseapp.com",
    projectId: "modowedding-e8a93",
    storageBucket: "modowedding-e8a93.firebasestorage.app",
    messagingSenderId: "789963121539",
    appId: "1:789963121539:web:194e5a9802bc0e611b0cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services you use
export const db = getFirestore(app);
export const storage = getStorage(app);

