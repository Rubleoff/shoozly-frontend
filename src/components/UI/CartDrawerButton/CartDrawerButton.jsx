import React from 'react'
import cl from './CartDrawerButton.module.css'

const CartDrawerButton = ({totalCost,totalQty,changeToBuy ,children, ...props}) => {

  let title = 'Go to cart'

  if (totalQty) {
    title += '(' + totalQty + ')'
  }

  if (changeToBuy) {
    title = 'Buy ' 
    if (totalCost) {
      title += totalCost + ' roubles'
    }
  }

  return (
    <button {...props} className={cl.cart__btn}>{title}</button>
  )
}

export default CartDrawerButton