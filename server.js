// server.js
const express = require('express');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, set } = require('firebase/database');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json()); // Allows the server to understand JSON data

// 1. YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAK57yQpZqq4x-BP1esxnvXHVe9pws8nW8",
  authDomain: "sinekultura-web-87ee8.firebaseapp.com",
  databaseURL: "https://sinekultura-web-87ee8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sinekultura-web-87ee8",
  storageBucket: "sinekultura-web-87ee8.firebasestorage.app",
  messagingSenderId: "209922770698",
  appId: "1:209922770698:web:76e434b834a40c119f5cf3"
};

// Initialize Firebase in Node
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// 2. THE API ROUTE
app.post('/api/partnership', async (req, res) => {
    // We added fileUrl to the incoming request!
    const { orgName, email, message, fileUrl } = req.body;

    if (!orgName || !email || !message) {
        return res.status(400).json({ error: "Organization, email, and message are required." });
    }

    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    try {
        const newRequestRef = push(ref(db, 'partnerships'));
        await set(newRequestRef, {
            orgName: orgName,
            email: email,
            message: message,
            fileUrl: fileUrl || null, // Saves the PDF link, or null if they didn't attach one
            timestamp: new Date().toISOString()
        });

        console.log(`New partnership request saved from: ${orgName}`);
        res.status(200).json({ success: "Partnership request sent successfully!" });

    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Failed to save request to the database." });
    }
});

// A simple route to check if the server is awake
app.get('/', (req, res) => {
    res.send("🟢 Sine Kultura API is awake and running!");
});

// 3. START THE SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});