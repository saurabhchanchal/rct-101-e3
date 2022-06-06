
import React, { useContext } from "react";
import {Link,  useNavigate} from  'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from '../../context/CartContext'
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout}=useContext(AuthContext)
  const {count}=useContext(CartContext)
  const navigate=useNavigate()
  const handelAuth=()=>{
    if(isAuth){
      logout()
      navigate("/")
    }
    else{
      navigate("/login")
    }
    
    
  }
  return (
    <div data-cy="navbar">
      
      <Link data-cy="navbar-home-link" to='/' >Logo</Link>
      <span data-cy="navbar-cart-items-count">{count}</span>
      <button data-cy="navbar-login-logout-button" onClick={handelAuth} >{isAuth? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;