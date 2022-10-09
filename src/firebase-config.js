import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBaBAdo2LUOAl2kKfLZVK1e9Cg1FFmdwtg",
    authDomain: "kinguilahoje-66c3c.firebaseapp.com",
    projectId: "kinguilahoje-66c3c",
    storageBucket: "kinguilahoje-66c3c.appspot.com",
    messagingSenderId: "565944860476",
    appId: "1:565944860476:web:51584b13b27036c4652839"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);