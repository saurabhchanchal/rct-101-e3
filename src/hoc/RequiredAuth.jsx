import React ,{useContext} from "react";
import {Navigate,useLocation} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
const RequiredAuth = ({ children }) => {

const {isAuth} = useContext(AuthContext)

const {pathname}=useLocation

if(isAuth){
  return children
}
else{
  return <Navigate state={{from:pathname}} replace={true} to='/login'></Navigate>
}
return children;
};

export default RequiredAuth;