import React from 'react';

function CakeCard({ img, name, price, addToCart }) {
  return (
    <div className="cake-card">
      <img className="cake-img" src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default CakeCard;
