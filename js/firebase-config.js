// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoxk81n4RuIi-gTj6a-MEcEH5qEBxslOc",
  authDomain: "cubiclensweb.firebaseapp.com",
  databaseURL: "https://cubiclensweb-default-rtdb.firebaseio.com",
  projectId: "cubiclensweb",
  storageBucket: "cubiclensweb.firebasestorage.app",
  messagingSenderId: "160780771485",
  appId: "1:160780771485:web:fc8b2ffa7f93a1442a7474",
  measurementId: "G-517EN98DCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
