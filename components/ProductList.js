 "use client";

import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {products.map((product) => (
        <article className="card" key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <div className="price">₹{product.price}</div>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </article>
      ))}
    </div>
  );
}