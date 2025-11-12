import React from 'react'
import cl from './BuyButton.module.css'

const BuyButton = ({ product, onAddToCart }) => {

  return (
    <button className={cl.button} onClick={() => onAddToCart(product)}>
      +
    </button>
  );
};


export default BuyButton