import reducer, {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "./cartSlice";

describe("cartSlice", () => {
  const product = {
    id: 1,
    title: "Classic T-Shirt",
    price: 499,
    category: "Clothing"
  };

  test("adds a product to cart", () => {
    const state = reducer(undefined, addToCart(product));

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual({ ...product, quantity: 1 });
  });

  test("increases quantity when same product is added", () => {
    let state = reducer(undefined, addToCart(product));
    state = reducer(state, addToCart(product));

    expect(state.items[0].quantity).toBe(2);
  });

  test("decreases quantity", () => {
    let state = reducer(undefined, addToCart(product));
    state = reducer(state, addToCart(product));
    state = reducer(state, decreaseQuantity(product.id));

    expect(state.items[0].quantity).toBe(1);
  });

  test("removes item when quantity reaches zero", () => {
    let state = reducer(undefined, addToCart(product));
    state = reducer(state, decreaseQuantity(product.id));

    expect(state.items).toHaveLength(0);
  });

  test("removes a product", () => {
    let state = reducer(undefined, addToCart(product));
    state = reducer(state, removeFromCart(product.id));

    expect(state.items).toHaveLength(0);
  });

  test("clears the cart", () => {
    let state = reducer(undefined, addToCart(product));
    state = reducer(state, clearCart());

    expect(state.items).toEqual([]);
  });
});