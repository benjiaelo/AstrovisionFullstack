import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBOTV9KmXR265ph7mRHBpWnbKzBO_QlmTQ",
  authDomain: "ecommerce-a53ae.firebaseapp.com",
  projectId: "ecommerce-a53ae",
  storageBucket: "ecommerce-a53ae.appspot.com",
  messagingSenderId: "705467889708",
  appId: "1:705467889708:web:19c5ec05d82dcc66fe7989",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export default app;
