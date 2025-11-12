import React from 'react'
import BuyButton from '../BuyButton/BuyButton'
import cl from './ProductCard.module.css'

const ProductCard = ({key, name, price, cat,onAddToCart, productData}) => {
  return (
    <div>
      <div className={cl.card}>
        <div className={cl.card__img}>
          <img src="" alt="none"/>
        </div>
        <div className={cl.card__price}>
          {price} руб.
        </div>
        <div className={cl.card__name}>
          {name}
        </div>
        <div className={cl.card__btn}>
          <BuyButton product={productData} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard