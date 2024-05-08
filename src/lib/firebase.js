import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a35e0.firebaseapp.com",
  projectId: "reactchat-a35e0",
  storageBucket: "reactchat-a35e0.appspot.com",
  messagingSenderId: "638877446753",
  appId: "1:638877446753:web:25ad145549e9ce6d11f020",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

export const storage = getStorage();
