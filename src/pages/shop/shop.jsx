import React from 'react'
import { PRODUCTS } from "../../products"
import {Items} from "./items"
import './shop.css'


const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTilte">
        <h1>Soliman Shop</h1>
      </div>

      <div className="products"> 
      {PRODUCTS.map((item) => (
       <Items data={item} />
       ))}
       </div>
      
    </div>
  )
}

export default Shop