import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file

const App = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [showRecommended, setShowRecommended] = useState(false); // State to track visibility of recommended filters

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://appscrpit01.onrender.com/api/products'); // Fetch products from backend
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

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleRecommended = () => {
    setShowRecommended(!showRecommended);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Page Title</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Filter Options */}
      <div>
        <button onClick={toggleFilter}>{showFilter ? 'Hide Filter' : 'Show Filter'}</button>
        {showFilter && (
          <div className="filter-options">
            <h2>Filter Options</h2>
            <label>
              <input type="checkbox" /> Example 1
            </label>
            <label>
              <input type="checkbox" /> Example 2
            </label>
            <label>
              <input type="checkbox" /> Example 3
            </label>
          </div>
        )}

        {/* Recommended Button */}
        <button onClick={toggleRecommended}>{showRecommended ? 'Hide Recommended' : 'Show Recommended'}</button>
        {showRecommended && (
          <div className="filter-options">
            <h2>Recommended Filters</h2>
            <label>
              <input type="checkbox" /> Low to High
            </label>
            <label>
              <input type="checkbox" /> High to Low
            </label>
            <label>
              <input type="checkbox" /> Popular
            </label>
            <label>
              <input type="checkbox" /> New Arrivals
            </label>
          </div>
        )}
      </div>

      {/* Aside */}
      <aside>
        <h2>Aside Section</h2>
        <p>This is a sidebar section.</p>
      </aside>

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

      {/* Additional Main Content */}
      <main>
        <h2>Additional Main Content</h2>
        <p>This is some additional content.</p>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Company</p>
        <p>Contact us at: info@example.com</p>
      </footer>
    </div>
  );
};

export default App;
