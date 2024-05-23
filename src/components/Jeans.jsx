import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Jeans = () => {
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

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const products = [
    { id: 1, name: 'S-1 CE Mens Textile Jean', price: 390, image: 'images/jean1.png' },
    { id: 2, name: 'Maverick Evo CE Mens Textile Jean', price: 706, image: 'images/jean2.png' },
    { id: 3, name: 'Ventilator XT CE Mens Textile Jean', price: 627, image: 'images/jean3.png' },
    { id: 4, name: 'Ranger CE Mens Textile Jean', price: 1180, image: 'images/jean4.png' },
    { id: 5, name: 'Pro Series Adventure-X CE Mens Textile Jean', price: 1022, image: 'images/jean5.png' },
    { id: 6, name: 'S-1 Mesh CE Mens Leather Jean', price: 785, image: 'images/jean6.png' },
    { id: 7, name: 'Pro Series Adventure-X CE Mens Textile Jean', price: 1022, image: 'images/jean7.png' },
    { id: 8, name: 'S-1 CE Mens Leather Jean', price: 825, image: 'images/jean8.png' },
    { id: 9, name: 'Pro Series Paragon 7 CE Mens Textile Jean', price: 785, image: 'images/jean9.png' },
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

export default Jeans;
