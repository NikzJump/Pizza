import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [allProducts, setAllProducts]  = React.useState(
    [
      {"name": "Чизбургер-пицца meat", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "meat"},
      {"name": "Чизбургер-пицца meat", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "meat"},
      {"name": "Чизбургер-пицца meat", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "meat"},
      {"name": "Чизбургер-пицца veget", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "veget"},
      {"name": "Чизбургер-пицца veget", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "veget"},
      {"name": "Чизбургер-пицца veget", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "veget"},
      {"name": "Чизбургер-пицца grill", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "grill"},
      {"name": "Чизбургер-пицца grill", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "grill"},
      {"name": "Чизбургер-пицца grill", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "grill"},
      {"name": "Чизбургер-пицца sharp", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "sharp"},
      {"name": "Чизбургер-пицца sharp", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "sharp"},
      {"name": "Чизбургер-пицца sharp", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "sharp"},
      {"name": "Чизбургер-пицца closed", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "closed"},
      {"name": "Чизбургер-пицца closed", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "closed"},
      {"name": "Чизбургер-пицца closed", "price": "от 395 ₽", "dough": "delicate", "size": "26 см.", "imgUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg", "category": "closed"},
    ]
  )



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home allProducts={allProducts} />} path="/" />
          <Route element={<Cart />} path="/cart"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
