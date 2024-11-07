// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnfuHD1AoV_4umuMJDsHVq_oLmh1dFIIw",
  authDomain: "amarajanatva.firebaseapp.com",
  projectId: "amarajanatva",
  storageBucket: "amarajanatva.appspot.com",
  messagingSenderId: "308881296434",
  appId: "1:308881296434:web:263f877952b2c7cf14c02b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
