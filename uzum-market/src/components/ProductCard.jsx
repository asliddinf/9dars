import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.price}$</p>
      <button onClick={() => addToCart(product)}>
        Savatga qo‘shish
      </button>
    </div>
  );
}

export default ProductCard;
