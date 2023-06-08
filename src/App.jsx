import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import Success from "./pages/Success";
import Spinner from "./components/Spinner/Spinner";
import "animate.css";
function App() {
  return (
    <div className="container mx-auto bg-primary">
      <Navbar />
      {/* <Spinner /> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
