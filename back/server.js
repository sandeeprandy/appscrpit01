const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS middleware
app.use(cors());

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve product data as JSON
app.get('/api/products', (req, res) => {
  // Read the products.json file and send its contents
  const products = require('./data/products.json');
  res.json(products);
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
