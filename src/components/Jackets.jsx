import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Jackets = () => {
  const [jackets, setJackets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const jacketsData = data.filter(product => product.category === 'jackets');
        setJackets(jacketsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jackets:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(item => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <Navbar cartItems={cartItems} />
      <div className="products">
        <h1>Jackets</h1>
        {jackets.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="product-grid">
            {jackets.map((jacket, index) => (
              <div key={index} className="product">
                <h2 style={{ fontFamily: 'fantasy' }}>{jacket.name}</h2>
                <p style={{ color: 'red', fontWeight: 'bold' , fontSize:'30px' }}>Price: {jacket.price} DT</p>
                <img src={jacket.image} alt={jacket.name} style={{ width: "350px", height: "350px" }}/>
                <button onClick={() => addToCart(jacket)}>Add to Cart</button>
                <button onClick={() => removeFromCart(jacket.id)}>Remove from Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Jackets;
