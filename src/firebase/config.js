// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8XTPBMMdpIFoTMlKdsaL3CSphXREiAK4",
  authDomain: "tienda-electronica-b516f.firebaseapp.com",
  projectId: "tienda-electronica-b516f",
  storageBucket: "tienda-electronica-b516f.appspot.com",
  messagingSenderId: "880765149580",
  appId: "1:880765149580:web:b66c6b3f2a6a126791b6a9",
  measurementId: "G-MRYTVYSF5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);