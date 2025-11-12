import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import cl from './CartDrawer.module.css';

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const { username, photo } = useTelegram();

  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleBuy = () => {
    // Логика покупки (отправка данных в бот и т.д.)
    console.log('Покупка:', cartItems);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={cl.backdrop} onClick={onClose}></div>
      <div className={`${cl.drawer} ${isOpen ? cl.open : ''}`}>
        {/* Профиль пользователя */}
        <div className={cl.user_info}>
          {photo && <img src={photo} alt="User" className={cl.user_photo} />}
          <span className={cl.username}>{username || 'Пользователь'}</span>
        </div>

        {/* Список товаров */}
        <div className={cl.cart_list}>
          {cartItems.length === 0 ? (
            <p className={cl.empty_cart}>Корзина пуста</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className={cl.cart_item}>
                <span className={cl.item_name}>{item.name}</span>
                <span className={cl.item_quantity}>x{item.quantity}</span>
                <span className={cl.item_price}>{item.price * item.quantity} руб.</span>
              </div>
            ))
          )}
        </div>

        {/* Общая сумма */}
        <div className={cl.total}>
          <span>Total Cost:</span>
          <span>{totalCost} руб.</span>
        </div>

        {/* Кнопка покупки */}
        <button className={cl.buy_button} onClick={handleBuy}>
          Buy
        </button>
      </div>
    </>
  );
};

export default CartDrawer;
