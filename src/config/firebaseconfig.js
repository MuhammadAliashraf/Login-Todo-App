// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCViKOpUhNDFJIJ3UuL_nQb7lIqLlPD-6w",
  authDomain: "boyler-palte-using-auth-data.firebaseapp.com",
  projectId: "boyler-palte-using-auth-data",
  storageBucket: "boyler-palte-using-auth-data.appspot.com",
  messagingSenderId: "322879572410",
  appId: "1:322879572410:web:710d5e81c53bc466e07583",
  measurementId: "G-DEHK4MGDVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;