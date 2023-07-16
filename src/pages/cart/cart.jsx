import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from '../../context/shop-context'
import  CartItem  from './cart-items'
import './cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
          {PRODUCTS.map((item) => {
            if (cartItems[item.id] !== 0 ) {
              return <CartItem data={item} />
            }
          })}
      </div>
          {totalAmount > 0 ? (
            <div className="checkout">
              <p>
                Subtitle: ${totalAmount}
              </p>
              <button onClick={() => navigate("/")}> Continue Shopping</button>
              <button> Checkout </button>
            </div>
          ) : (
            <div className="checkout">
              <h1>Your Cart is Empty</h1>
              <button onClick={() => navigate("/")}> Continue Shopping</button>
              <button> Checkout </button>
            </div>
          )}
      
    </div>
  )
}

export default Cart
