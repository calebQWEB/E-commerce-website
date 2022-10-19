import React from 'react'
import './allproducts.css'
import cart from '../../mappedComponets/cart'

const Allproducts = (props) => {
  const addtoCart = () => {
    cart.push(props)
  }

  return (
    <div>
      <div className='product__info'>
        <div className='headercontainer'>
          <h1 className='product-header'>{props.header}</h1>
          <span className='price'>${props.price}</span>
          <button className='buy' onClick={addtoCart}>ADD TO CART</button>
        </div>
        <div className='product-image'>
          <img alt='product image' src={props.img} className='image' />
        </div>
      </div>
    </div>
  )
}

export default Allproducts