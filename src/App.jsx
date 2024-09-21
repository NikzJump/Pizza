import React from "react";
import axios from "axios"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [allProducts, setAllProducts]  = React.useState([])
  const [cartPoducts, setCartPoducts] = React.useState([])

  const onAddClick = (prod) => {
    for (let i = 0; i < cartPoducts.length; i++) {
      if (prod.key === cartPoducts[i].key) {console.log(prod);return} 
    }
    axios.post("https://66e34a13494df9a478e4db0d.mockapi.io/cart", prod)
    axios.get("https://66e34a13494df9a478e4db0d.mockapi.io/cart").then(res => {
      setCartPoducts(res.data)  
    })
    console.log(cartPoducts);
    
  }

  React.useEffect(() => {
    axios.get("https://66e34a13494df9a478e4db0d.mockapi.io/products").then(res => setAllProducts(res.data))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home allProducts={allProducts} onAddClick={(prod) => onAddClick(prod)}/>} path="/" />
          <Route element={<Cart />} path="/cart"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
