import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Gloves = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

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

  const products = [
    { id: 1, name: 'Rider CE Mens Glove', price: 114, image: '/images/glove1.png' },
    { id: 2, name: 'TracTech Evo 4 Short CE Mens Glove', price: 311, image: '/images/glove2.png' },
    { id: 3, name: 'Roadster 3 CE Mens Glove', price: 217, image: '/images/glove3.png' },
    { id: 4, name: 'Pro Series Paragon 6 Heated CE Mens Waterproof Glove', price: 785, image: '/images/glove4.png' },
    { id: 5, name: 'Storm 2 Textile CE Mens Waterproof Glove', price: 173, image: '/images/glove5.png' },
    { id: 6, name: 'Pro Series Ranger CE Mens Waterproof Glove', price: 390, image: '/images/glove6.png' },
    { id: 7, name: 'Shoreditch CE Mens Glove', price: 154, image: '/images/glove7.png' },
    { id: 8, name: 'Pilot CE Mens Glove', price: 193, image: '/images/glove8.png' },
    { id: 9, name: 'S-1 CE Mens Waterproof Glove', price: 331, image: '/images/glove9.png' },
  ];

  return (
    <div className="product-container">
      <Navbar cartItems={cartItems} />
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p style={{ fontFamily: 'fantasy' }}>{product.name}</p>
            <p style={{ color: 'red', fontWeight: 'bold' , fontSize:'30px' }}>{product.price} DT</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gloves;
