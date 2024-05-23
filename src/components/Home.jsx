import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = ({ cartItems }) => {
  return (
    <div className="Home">
      <Navbar cartItems={cartItems} />
      <div className="Hometitle">
        <h1>FIND YOUR STYLE</h1>
      </div>
      <div className="PromotionalBanner">
        <h2>Summer Sale: Up to 50% Off!</h2>
      </div>
      <div className="Homeimages">
        <img src="/images/imghome1.png" alt="Product 1" />
        <img src="/images/imghome2.png" alt="Product 2" />
        <img src="/images/imghome3.png" alt="Product 3" />
        <img src="/images/imghome4.png" alt="Product 4" />
      </div>
      <div className="Introtxt">
        <p>Welcome to our store! Discover the latest trends in motorcycle clothing and gear.</p>
      </div>
      <div className="Reviews">
        <h2>What Our Customers Say</h2>
        <blockquote>"Best motorcycle gear I've ever purchased!" - Kays</blockquote>
        <blockquote>"Fantastic quality and great customer service." - Ahmed</blockquote>
      </div>
      <Footer />
    </div>
  );
};

Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

Home.defaultProps = {
  cartItems: [],
};

export default Home;
