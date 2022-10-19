import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

const Products = (prop) => {
  return (
    <div className='shopping__products'>
      <Link to={prop.link}>
        <img src={prop.img} />
        <p className='name'>{prop.name}
          <span>{prop.mode}</span>
        </p>
        <p className='price'>${prop.price}</p>
      </Link>
    </div>
  )
}

export default Products