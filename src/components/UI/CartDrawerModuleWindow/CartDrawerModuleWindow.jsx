import React from 'react'
import styles from './CardDrawerModuleWindow.module.css'
import { useTelegram } from '../../hooks/useTelegram'


const CartDrawerModuleWindow = (props) => {

  const {username, photo} = useTelegram()

  return (
    <div className={styles.module_window}>
      <div className={styles.user_info}></div>
        {photo && <img src={photo} alt = 'user_photo' className={styles.user_photo}/>}
        <span className={styles.user_name}> {username || 'Пользователь'} </span>
        <div className={styles.cart_list}>
        </div>
    </div>
  )
}

export default CartDrawerModuleWindow