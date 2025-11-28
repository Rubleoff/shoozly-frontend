import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({item, onAddToCart}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card__img}>
            <img src='' alt="none" />
        </div>
        <div className={styles.card__content}>
            <span className={styles.card__title}>
                {item.title}
            </span>
            <span className={styles.card__price}>
                {item.price}
            </span>
            <button className={styles.buy__btn} onClick={() => onAddToCart(item)}>+</button>
        </div>
    </div>
  )
}

export default ProductCard