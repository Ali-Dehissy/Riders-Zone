import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Gloves = () => {
  const [gloves, setGloves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/gloves")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGloves(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gloves:", error);
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
        <h1>Gloves</h1>
        {gloves.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="product-grid">
            {gloves.map((glove, index) => (
              <div key={index} className="product">
                <h2 style={{ fontFamily: 'fantasy' }}>{glove.name}</h2>
                <p style={{ color: 'red', fontWeight: 'bold' , fontSize:'30px' }}>Price:{glove.price} DT</p>
                <img src={glove.image} alt={glove.name} style={{ width: "350px", height: "350px" }}/>
                <button onClick={() => addToCart(glove)}>Add to Cart</button>
                <button onClick={() => removeFromCart(glove.id)}>Remove from Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gloves;
