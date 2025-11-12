import React from 'react';
import cl from './CartDrawerButton.module.css';

const CartDrawerButton = ({ onClick, cartItemsCount }) => {
  return (
    <button className={cl.CartDrawer} onClick={onClick}>
      Go to cart {cartItemsCount > 0 && `(${cartItemsCount})`}
    </button>
  );
};

export default CartDrawerButton;
