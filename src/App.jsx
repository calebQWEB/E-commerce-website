import { React, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mainpage from './sections/mainPage/Mainpage'
import Shoes from './Pages/Shoes/Shoes'
import Watches from './Pages/Watches/Watches'
import Jeans from './Pages/Jeans/Jeans'
import Shirts from './Pages/Shirts/Shirts'
import Navbar from './sections/Navbar/Navbar'
import Cart from './Pages/Cart/Cart'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainpage />}></Route>
        <Route path='shoes' element={<Shoes />}></Route>
        <Route path='watches' element={<Watches />}></Route>
        <Route path='jeans' element={<Jeans />}></Route>
        <Route path='shirts' element={<Shirts />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
