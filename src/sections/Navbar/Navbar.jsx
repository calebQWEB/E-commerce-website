import React, { useState } from 'react'
import './navbar.css'
import cart from '../../mappedComponets/cart'

import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
      <div className='Shopping__nav'>
        <h1>E-Commerce</h1>

        <div className='button__cart-container'>
          <Link to='/cart'>
            <div className='order-container'>
              <span className='orders'></span>
              <FaCartPlus className='cart' />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar