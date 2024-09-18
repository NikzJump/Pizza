import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
