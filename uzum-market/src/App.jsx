import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <CartProvider>
        <Header setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
