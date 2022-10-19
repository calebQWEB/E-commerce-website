import React from 'react'
import './cart.css'
import Navbar from '../../sections/Navbar/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
import mainshoe from '../../assets/shoes/mainshoe.jpg'
import cart from '../../mappedComponets/cart'
import CartComponent from '../../Components/cartComponent/CartComponent'


const Cart = () => {
  const mappedCart = cart.map(i => {
    return (
      <CartComponent img={i.img}
        title={i.title}
        price={i.price}
        key={i.id} />
    )
  })
  return (
    <div className='shopping__cart'>
      <div className='cart-header'>
        <FaArrowLeft className='arrow' />
        <h1 className='cart-h1'>
          SHOPPING CART
        </h1>
        <span className='items-left'>{cart.length} ITEMS</span>
      </div>
      <hr></hr>
      {mappedCart}
    </div>
  )
}

export default Cart