import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid">
      {products
        .filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
    </div>
  );
}

export default Home;
