import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration for Colestia
const firebaseConfig = {
    apiKey: "AIzaSyD1xrT2o0Lv4d5Ao9n_rM0Kdh6pzuIiyp0",
    authDomain: "colestia-ee68c.firebaseapp.com",
    projectId: "colestia-ee68c",
    storageBucket: "colestia-ee68c.firebasestorage.app",
    messagingSenderId: "13938263594",
    appId: "1:13938263594:web:35cb15aaa6a08f5e746553",
    measurementId: "G-QFTSWKCNR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

