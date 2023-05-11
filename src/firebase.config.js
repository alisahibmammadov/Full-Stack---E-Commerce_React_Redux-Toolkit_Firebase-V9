import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCT5lZXu9AjgTDRljA_jT0zTRQB3xOrG1M",
  authDomain: "maltimart-72a56.firebaseapp.com",
  projectId: "maltimart-72a56",
  storageBucket: "maltimart-72a56.appspot.com",
  messagingSenderId: "803706633421",
  appId: "1:803706633421:web:15281cc62a1c6cca3abd84",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
