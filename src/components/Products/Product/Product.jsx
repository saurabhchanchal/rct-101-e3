import React, { useState , useEffect, useContext} from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";
const Product = () => {
const [Product,setProduct]=useState()
const {counter}=useContext(CartContext)
  const getdata=()=>{
    let res= axios.get(`http://localhost:8080/products`)
     .then((res)=>{setProduct(res.data)})
   } 
  useEffect(()=>{
     getdata()
  },[])

  const handlecount=(p)=>{
    counter(p)
  }
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${Product.id}`}>
      <h3 data-cy="product-name">{Product.name}</h3>
      <h6 data-cy="product-description">{Product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"onClick={()=>handlecount(+1)} >+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>handlecount(-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
  );
};

export default Product;