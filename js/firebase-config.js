/**
 * CubicLens - Firebase Configuration
 * Initialize Firebase and export database reference
 */

// Firebase SDK imports (using CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoxk81n4RuIi-gTj6a-MEcEH5qEBxslOc",
  authDomain: "cubiclensweb.firebaseapp.com",
  projectId: "cubiclensweb",
  storageBucket: "cubiclensweb.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export Firebase functions and references
export { db, ref, set, push, onValue, remove, update };
