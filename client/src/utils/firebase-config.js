import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpoR1ONZpCqpeFVnZ-EkEMntfgY1gQ9J8",
  authDomain: "flixxitfinal.firebaseapp.com",
  projectId: "flixxitfinal",
  storageBucket: "flixxitfinal.appspot.com",
  messagingSenderId: "673007650068",
  appId: "1:673007650068:web:faf12a57985e9012b32e01",
  measurementId: "G-EK832P2VZ4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
