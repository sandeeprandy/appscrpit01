import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";



const App = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [showRecommended, setShowRecommended] = useState(false); // State to track visibility of recommended filters

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://appscrpit01.onrender.com/api/products"
        ); // Fetch products from backend
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json(); // Parse JSON response
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
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
      <header>
        <h1>LOGO</h1>
        <div className="icons">
          <a href="#">🔍</a> 
          <a href="#">❤️</a>
          <a href="#">🛒</a> 
          <a href="#">👤</a> 
          <a href="#">🌐</a> 
        </div>
        <Navbar  expand="lg">
          <Container>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mx-auto">
                <Nav.Link href="#">SHOP</Nav.Link>
                <Nav.Link href="#">SKILL</Nav.Link>
                <Nav.Link href="#">STORIES</Nav.Link>
                <Nav.Link href="#">ABOUT</Nav.Link>
                <Nav.Link href="#">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div className="discover">
        <h2>DISCOVER OUR PRODUCTS </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="filterbuttons">
        <p onClick={toggleFilter}>
          {showFilter ? "Hide Filter →" : "Show Filter ↓"}
        </p>

        <p onClick={toggleRecommended}>
          {showRecommended ? "Hide Recommended →" : "Show Recommended  ↓"}
        </p>
      </div>

      <main>
        <div className="fliter">
          {showFilter && (
            <div className="filter-options">
              <label>
                <input type="checkbox" /> COSTAMUZBLE
              </label>
              <label>
                <input type="checkbox" /> IDEAL FOR
              </label>
              <label>
                <input type="checkbox" /> occasion
              </label>
              <label>
                <input type="checkbox" /> WORK
              </label>
              <label>
                <input type="checkbox" /> FABRIC
              </label>
              <label>
                <input type="checkbox" /> SIZE
              </label>
              <label>
                <input type="checkbox" /> WORK
              </label>
            </div>
          )}{" "}
        </div>
        <div>
          <ul className="products">
            {products.map((product) => (
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
        </div>
        <div>
          {showRecommended && (
            <div className="recomend-options">
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
      </main>

      <footer>
        <div className="rigister">
          <div>
            <h1>BE THE FIRST TO KNOW</h1>
            <p>rigister your email for updates from our store!</p>
            <input placeholder="Enter Your Email" /> <button> Subscribe</button>
          </div>

          <div>
            <h1>CONTACT US</h1>
            <p>+48569875548</p>
            <p>sandeeprandi123@gmail.com</p>
            <h2>CURRENCY</h2>
            <p>indian rupees</p>
          </div>
        </div>
        <hr></hr>
        <div className="rigister">
          <div>
            <h1>metta muse</h1>
            <p>about us</p>
            <p>stories</p>
            <p>careers</p>
          </div>

          <div>
            <h2>QUICK LINKS</h2>
            <p>HOME</p>
            <p>man fatishin</p>
            <p>kids fashion</p>
            <p>papulor products</p>
            <p>new arrival</p>
            <p>offers items</p>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <a href="#">📸</a>

            <a href="#">🔗</a>
            <p>PAYMENT METHODS</p>
            <div className="icons">
              <a href="#">💳</a> 
              <a href="#">💳</a>
              <a href="#">🍏💳</a> 
              <a href="#">🌐💳</a> 
              <a href="#">🛍️💳</a> 
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center' }}  >copy rights @2024 all rights resrved</p>
      </footer>
    </div>
  );
};

export default App;
