"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <aside className="cart" aria-label="Shopping cart">
      <strong>Cart ({totalItems})</strong>

      {items.length > 0 && (
        <div className="cart-items">
          {items.map(item => (
            <div className="cart-row" key={item.id}>
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>
                <button
                  aria-label={`Decrease ${item.title}`}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>{" "}
                <button
                  aria-label={`Remove ${item.title}`}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </span>
            </div>
          ))}

          <p>
            <strong>Total: ₹{totalPrice}</strong>
          </p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </aside>
  );
}
