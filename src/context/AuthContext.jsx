import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const navigate=useNavigate()
  const [isAuth,setAuth]=useState(false)
  const {state}=useLocation()
  const toggleAuth=()=>{
    if(isAuth){
      setAuth(false)
    }
    else{
      setAuth(true)
    }
  }

  const login=()=>{
    setAuth(true)
    navigate("/products")
 
    // navigate("/products")
    
  }


  const logout=()=>{
    setAuth(false)
    navigate("/")
  }
  return <AuthContext.Provider value={{isAuth,toggleAuth,login,logout}} >{children}</AuthContext.Provider>;
};