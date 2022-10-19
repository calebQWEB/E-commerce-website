import React from 'react'
import Products from '../../Components/Products/Products'
import './body.css'
import productCard from '../../mappedComponets/productCard'

const Body = () => {
  const cards = productCard.map((card, index) => {
    return (
      <Products
        img={card.img}
        name={card.name}
        mode={card.mode}
        price={card.price}
        key={card.id}
        link={card.to}
      />
    )
  })
  return (
    <main>
      <div className='shopping__body'>
        {cards}
      </div>
    </main>
  )
}

export default Body