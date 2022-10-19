import React, { useState } from 'react'
import './cartcomponents.css'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import cart from '../../mappedComponets/cart'

const CartComponent = (props) => {
    const [adding, setAdding] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const { img, price } = props

    const clickAdd = () => {
        setAdding(prevState => prevState + price)
        setQuantity(current => current + 1)
    }

    const clickSubtract = () => {
        if (adding === 0) {
            return
        } else {
            setAdding(prevState => prevState - price)
            setQuantity(current => current - 1)
        }
    }

    const removeProp = (img) => {
        const filtered = cart.filter((item) => item.img !== img)
        cart.splice(0, cart.length, ...filtered)
        console.log(cart)
    }

    return (
        <div>
            <div className='cart-container'>
                <div className='cart-main'>
                    <div className='product'>
                        <h2>PRODUCT</h2>
                        <div className='product-info'>
                            <img src={img} alt='product' className='product-pic' />
                        </div>
                    </div>

                    <div className='addingProduct'>
                        <h2>ADD AND SUBTRACT</h2>
                        <div className='add-subtract'>
                            <div className='subtract' onClick={clickSubtract}><FaMinus className='minus' /></div>
                            <div className='add' onClick={clickAdd} ><FaPlus className='plus' /></div>
                        </div>
                    </div>

                    <div className='quantity'>
                        <h2>QUANTITY</h2>
                        <span>{quantity}</span>
                    </div>

                    <div className='price'>
                        <h2>PRICE</h2>
                        <p className='cart-price'>${price}</p>
                    </div>

                    <div className='total'>
                        <h2>TOTAL</h2>
                        <p className='cart-total'>${adding === 0 ? price : adding}</p>
                    </div>

                    <div className='remove'>
                        <h2>REMOVE</h2>
                        <FaTrash className='trash' onClick={() => removeProp(img)} />
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default CartComponent

// How do you pass state from one component to another
// How do you use one state across different components

// create a state in cart components and in the various components using props (allproducts and childproducts), pass the props into that
// component you created in cartComponent
// GOODLUCK