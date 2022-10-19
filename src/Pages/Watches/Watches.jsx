import React from 'react'
import './watches.css'
import mainwatch from '../../assets/wristwatch/mainwatch.jpg'
import Allproducts from '../../Components/AllProducts/Allproducts'
import Navbar from '../../sections/Navbar/Navbar'
import watchchild from '../../mappedComponets/watchchild'
import ChildProduct from '../PagesComponents/ChildProducts/ChildProduct'
import cart from '../../mappedComponets/cart'

const Watches = () => {
  const children = watchchild.map(child => {
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
    <div className='shopping__watch'>
      <Navbar />
      <div>
        <Allproducts header='ROLEX'
          price={10000.00}
          img={mainwatch} />

        <div className='childProduct'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Watches