import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Savat</h2>

      {cart.length === 0 && <p>Savat bo‘sh</p>}

      {cart.map((item, index) => (
        <p key={index}>
          {item.title} — {item.price}$
        </p>
      ))}
    </div>
  );
}

export default Cart;
