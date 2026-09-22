import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { makeStore } from "../store/store";
import Cart from "./Cart";
import { addToCart } from "../store/cartSlice";

function renderCart() {
  const store = makeStore();
  store.dispatch(
    addToCart({
      id: 1,
      title: "Classic T-Shirt",
      price: 499,
      category: "Clothing"
    })
  );

  return {
    store,
    ...render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
  };
}

describe("Cart", () => {
  test("shows cart item and total", () => {
    renderCart();

    expect(screen.getByText("Classic T-Shirt × 1")).toBeInTheDocument();
    expect(screen.getByText("Total: ₹499")).toBeInTheDocument();
  });

  test("can remove an item", async () => {
    const user = userEvent.setup();
    renderCart();

    await user.click(screen.getByRole("button", { name: "Remove Classic T-Shirt" }));

    expect(screen.queryByText("Classic T-Shirt × 1")).not.toBeInTheDocument();
  });
});