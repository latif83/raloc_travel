// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGzi-rH1RLOBfJLv34gbpKfmGUGg4WMKo",
  authDomain: "niilano-b4d6d.firebaseapp.com",
  projectId: "niilano-b4d6d",
  storageBucket: "niilano-b4d6d.appspot.com",
  messagingSenderId: "602582283160",
  appId: "1:602582283160:web:ffbb23853137e328a631ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)
export const db = getFirestore(app)