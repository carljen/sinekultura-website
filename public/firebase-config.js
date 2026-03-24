// public/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"; // NEW: Import Auth

const firebaseConfig = {
  apiKey: "AIzaSyAK57yQpZqq4x-BP1esxnvXHVe9pws8nW8",
  authDomain: "sinekultura-web-87ee8.firebaseapp.com",
  databaseURL: "https://sinekultura-web-87ee8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sinekultura-web-87ee8",
  storageBucket: "sinekultura-web-87ee8.firebasestorage.app",
  messagingSenderId: "209922770698",
  appId: "1:209922770698:web:76e434b834a40c119f5cf3"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // NEW: Initialize and Export Auth

console.log("Realtime Database & Auth Initialized!");