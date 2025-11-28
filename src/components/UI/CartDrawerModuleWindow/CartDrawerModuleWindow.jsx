import React from 'react'
import styles from './CardDrawerModuleWindow.module.css'
import { useTelegram } from '../../hooks/useTelegram'



const CartDrawerModuleWindow = ({children, visible, setVisible, items, qtyDecrease, qtyIncrease, clearCart}) => {

  const {username, photo} = useTelegram()

  const rootClasses = [styles.module_window]
  if (visible) {
    rootClasses.push(styles.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.cart_content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.user_info}>
          <span className={styles.user_name}> {photo && <img src={photo} alt = 'user_photo' className={styles.user_photo}/>} {username || 'Пользователь'} </span>
        </div>
        <hr style={{margin: '15px 0'}}/>
        <div className={styles.cart_list}>
        {items.map(item => 
          (
            <div className={styles.line} key={item.id}>
              <span>{item.title}</span>
              <span>{item.price}</span>
              <button onClick={() => {qtyDecrease(item.id)}}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => {qtyIncrease(item.id)}}>+</button>
              <span>{item.price * item.qty}</span>
            </div>))}
        </div>
        <button className={styles.clear_btn} 
        onClick={() => clearCart()}>
          Clear all
          </button>
      </div>
    </div>
  )
}

export default CartDrawerModuleWindow