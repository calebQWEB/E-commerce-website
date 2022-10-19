import React from 'react'
import './childproduct.css'
import cart from '../../../mappedComponets/cart'
import childCard from '../../../mappedComponets/childCard'

const ChildProduct = (prop) => {

  const addtoCart = () => {
    cart.push(prop)
  }

  return (
    <>
      <div className='shopping__child-product'>
        <img src={prop.img} alt='related product' />
        <p className='title'>{prop.title}
          <span>{prop.span}</span>
        </p>
        <p className='money'>${prop.price}</p>
        <button className='order' onClick={addtoCart}>ADD TO CART</button>
      </div>
    </>

  )
}

export default ChildProduct