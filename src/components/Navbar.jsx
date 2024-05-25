import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className='Nav'>
      <Link to="/home">
        <img src="/images/logo.png" className='logo' alt="Logo" />
      </Link>
      <div>
        <Link to="/Jackets">
          <img src="/images/jacketslogo.png" className="jacketslogo" alt="Jackets Logo" />
          <p className='jackets'>Jackets</p>
        </Link>
      </div>
      <div>
        <Link to="/jeans">
          <img src="/images/jeanlogo.png" className='jeanlogo' alt="Jeans Logo" />
          <p className='jeans'>Jeans</p>
        </Link>
      </div>
      <div>
        <Link to="/gloves">
          <img src="/images/gloveslogo.png" className='gloveslogo' alt="Gloves Logo" />
          <p className='gloves'>Gloves</p>
        </Link>
      </div>
      <div>
        <Link to='/blog'>
        <p className='blog'>Blog</p>
        </Link>
      </div>
      <div>
        <Link to='/signup'>
        <img src="/images/accountlogo.png" className='accountlogo' alt="Account Logo" />
        </Link> 
      </div>
      <div className="cart-container">
          <img src="/images/cart.png" className='cartlogo' alt="Cart Logo" />
          <span style={{ color: 'white', }}>DT{totalPrice.toFixed(2)}</span>

      </div>
    </div>
  );
}

export default Navbar;
