import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginuser,setLogin]=useState({})
  const {login} =useContext(AuthContext)
  const navigate=useNavigate()
  const handelchange=(e)=>{
    const {name,value}=e.target;
    setLogin({
      ...loginuser,
      [name]:value
    })
  }

  const handelsubmit=(e)=>{
    e.preventDefault()
   login()
    
  }
  return (
    <div>
      <form onSubmit={handelsubmit}>
      <input onChange={handelchange} name='email' type='email' data-cy="login-email" />
      <input onChange={handelchange} name="password" type="password"  data-cy="login-password" />
      <button  data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;