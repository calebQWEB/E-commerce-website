import React from 'react'
import './mainpage.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Body from '../Body/Body'

const Mainpage = (z) => {
  return (
    <div className='shopping__homepage'>
      <header>
        <Navbar />
        <Header />
      </header>
      <Body />
    </div>
  )
}

export default Mainpage