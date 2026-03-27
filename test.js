// test.js
const fs = require('fs');

console.log("Running automatic tests...");

// Check if critical files exist
if (fs.existsSync('./public/index.html') && fs.existsSync('./public/admin.html')) {
    console.log("✅ SUCCESS: Critical UI files are present.");
    process.exit(0); // 0 means the test passed
} else {
    console.error("❌ FAILED: A critical file is missing. Rejecting commit!");
    process.exit(1); // 1 means the test failed
}