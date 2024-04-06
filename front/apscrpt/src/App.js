import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Fetch products from backend
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json(); // Parse JSON response
        setProducts(data); // Set products state with fetched data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Page Title</h1>
      </header>

      {/* Main Content */}
      <main>
        <h2>Main Content</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default App;
