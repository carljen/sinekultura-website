// test.js
const fs = require('fs');

console.log("Running automatic tests...");

// We are intentionally looking for 'missing-file.html' to force a failure
if (fs.existsSync('./public/index.html') && fs.existsSync('./public/missing-file.html')) {
    console.log("✅ SUCCESS: Critical UI files are present.");
    process.exit(0); 
} else {
    console.error("❌ FAILED: A critical file is missing. Rejecting commit!");
    process.exit(1); 
}