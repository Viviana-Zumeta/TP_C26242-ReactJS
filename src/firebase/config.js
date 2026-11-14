// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//⚠️Esto no deberia compartirse en un proyecto real
//📚En este proyecto educativo, por simplicidad para todos, lo utilizamos asi
//👉A futuro lo reemplazarían por variables de entorno y archivo .env😉
const firebaseConfig = {
 apiKey: "AIzaSyB4VA2FWGysrFY7iWvy54EcyZnP4KQDbH0",
  authDomain: "c26242tp.firebaseapp.com",
  projectId: "c26242tp",
  storageBucket: "c26242tp.firebasestorage.app",
  messagingSenderId: "861559043569",
  appId: "1:861559043569:web:6a7c092522e667434bc050"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//Para el login
const auth = getAuth(app);

export { db, auth } ;