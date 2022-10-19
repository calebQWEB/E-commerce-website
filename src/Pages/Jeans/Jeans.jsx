import React from 'react'
import './jeans.css'
import Navbar from '../../sections/Navbar/Navbar'
import Allproducts from '../../Components/AllProducts/Allproducts'
import mainsjeans from '../../assets/Jeans/mainjeans.jpg'
import ChildProduct from '../PagesComponents/ChildProducts/ChildProduct'
import Jeanchild from '../../mappedComponets/Jeanchild'

const Jeans = () => {
  const children = Jeanchild.map(child => {
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
    <div className='shoppin__jeans'>
      <Navbar />
      <div>
        <Allproducts header='MNZ'
          price={100.00}
          img={mainsjeans} />

        <div className='childProduct'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Jeans