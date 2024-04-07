const express = require('express');
const path = require('path');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS middleware
app.use(cors());


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/products', (req, res) => {

  const products = require('./data/products.json');
  res.json(products);
});




// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
