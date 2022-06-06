import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count,setCount]=useState(0)
  const counter=(p)=>{
    setCount(count+p)
  }
  return <CartContext.Provider value={{count,counter}} >{children}</CartContext.Provider>;
};