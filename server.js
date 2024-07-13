const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3100;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
