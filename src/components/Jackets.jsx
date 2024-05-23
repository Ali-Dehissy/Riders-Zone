import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Jackets = () => {
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
    { id: 1, name: 'Tractech Evo 5 CE Mens Textile Jacket', price: 666, image: '/images/jacket1.png' },
    { id: 2, name: 'RST X IOMTT / Team Hoodie ', price: 200, image: '/images/jacket2.png' },
    { id: 3, name: 'Ranger CE Mens Textile Jacket', price: 1574, image: '/images/jacket3.png' },
    { id: 4, name: 'RST Brixton CE Mens Textile Jacket', price: 824, image: '/images/jacket4.png' },
    { id: 5, name: 'L2 ARMOUR SHIRT', price: 1550, image: '/images/jacket5.png' },
    { id: 6, name: 'Ventilator XT CE Mens Textile Jacket', price: 706, image: '/images/jacket6.png' },
    { id: 7, name: 'Roadster Air CE Mens Leather Jacket', price: 666, image: '/images/jacket7.png' },
    { id: 8, name: 'RST Lumberjack CE Mens Textile Shirt', price: 139, image: '/images/jacket8.png' },
    { id: 9, name: 'IOM TT Brandish 2 CE Mens Leather Jacket', price: 1150, image: '/images/jacket9.png' },
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

export default Jackets;
