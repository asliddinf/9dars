import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header({ setSearch }) {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        Uzum Market
      </Link>

      <input
        className="search"
        placeholder="Mahsulot qidirish..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link to="/cart" className="cart">
        🛒 {cart.length}
      </Link>
    </header>
  );
}

export default Header;
