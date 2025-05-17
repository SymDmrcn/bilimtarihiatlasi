
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe0Jt8VkMsEmOZXLTfaePHolP-Gi9V2GY",
  authDomain: "bilim-tarihi-atlas.firebaseapp.com",
  projectId: "bilim-tarihi-atlas",
  storageBucket: "bilim-tarihi-atlas.firebasestorage.app",
  messagingSenderId: "709895149991",
  appId: "1:709895149991:web:1db7468a2af791eb70be82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
