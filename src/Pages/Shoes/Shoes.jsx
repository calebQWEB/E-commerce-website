import React, { useState } from 'react'
import './shoes.css'
import Allproducts from '../../Components/AllProducts/Allproducts'
import Navbar from '../../sections/Navbar/Navbar'
import mainshoe from '../../assets/shoes/mainshoe.jpg'
import ChildProduct from '../PagesComponents/ChildProducts/ChildProduct'
import childCard from '../../mappedComponets/childCard'

const Shoes = () => {


  const children = childCard.map(child => {
    return (
      <ChildProduct
        img={child.img}
        title={child.title}
        span={child.span}
        price={child.price}
        key={child.id} />
    )
  })

  return (
    <div className='shoppin__shoe'>
      <Navbar />
      <div>
        <Allproducts header='TERRANCE BACKDALE'
          price={80.00}
          img={mainshoe}
          trash='FaTrash' />

        <div className='childProduct'>
          {children}
        </div>
      </div>
    </div>

  )
}

export default Shoes