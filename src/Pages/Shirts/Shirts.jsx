import React from 'react'
import './shirt.css'
import Navbar from '../../sections/Navbar/Navbar'
import Allproducts from '../../Components/AllProducts/Allproducts'
import mainshirt from '../../assets/shirts/mainshirt.jpg'
import ChildProduct from '../PagesComponents/ChildProducts/ChildProduct'
import shirtchild from '../../mappedComponets/shirtchild'
import cart from '../../mappedComponets/cart'
import productCard from '../../mappedComponets/productCard'

const Shirts = () => {

  const children = shirtchild.map(child => {
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
    <div className='shoppin__shirt'>
      <Navbar />
      <div>
        <Allproducts header='YAYOTARO'
          price={20.00}
          img={mainshirt} />

        <div className='childProduct'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Shirts