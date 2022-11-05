import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

   apiKey: "AIzaSyCbX-Iy2mJWv-sEN7YU7I4u60JPIFZqJ_o",

   authDomain: "ozen-chat.firebaseapp.com",

   projectId: "ozen-chat",

   storageBucket: "ozen-chat.appspot.com",

   messagingSenderId: "591405909785",

   appId: "1:591405909785:web:ec6f1e688cacfea84f6788"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
