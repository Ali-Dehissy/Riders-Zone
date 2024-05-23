import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - DT{item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: DT{total}</h3>
    </div>
  );
};

export default Cart;
