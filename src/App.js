import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {/* <Routes>
         <Route path="/products" element={<Products></Products>}></Route> 
         <Route path="/product" element={<Product/>}/>
        </Routes> */}

      <Products />
    </div>
  );
}

export default App;