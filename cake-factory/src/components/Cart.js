import React from 'react';

function Cart({ count }) {
  return (
    <div className="cart">
      Cart: <span>{count}</span>
    </div>
  );
}

export default Cart;
