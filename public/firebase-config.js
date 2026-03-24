// public/firebase-config.js

// 1. Import the Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// SWAPPED: Using database instead of firestore
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// 2. PASTE YOUR CONFIG HERE (and add the databaseURL!)
const firebaseConfig = {
  apiKey: "AIzaSyAK57yQpZqq4x-BP1esxnvXHVe9pws8nW8",
  authDomain: "sinekultura-web-87ee8.firebaseapp.com",
  databaseURL: "https://sinekultura-web-87ee8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sinekultura-web-87ee8",
  storageBucket: "sinekultura-web-87ee8.firebasestorage.app",
  messagingSenderId: "209922770698",
  appId: "1:209922770698:web:76e434b834a40c119f5cf3"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Export the tools
export const db = getDatabase(app);
export const storage = getStorage(app);

console.log("Realtime Database Initialized!");