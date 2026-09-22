import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../store/store";
import ProductList from "./ProductList";

function renderWithStore() {
  const store = makeStore();

  return render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

describe("ProductList", () => {
  test("renders products", () => {
    renderWithStore();

    expect(screen.getByText("Classic T-Shirt")).toBeInTheDocument();
    expect(screen.getByText("Running Shoes")).toBeInTheDocument();
    expect(screen.getByText("Backpack")).toBeInTheDocument();
    expect(screen.getByText("Smart Watch")).toBeInTheDocument();
  });

  test("renders add to cart buttons", () => {
    renderWithStore();

    expect(screen.getAllByRole("button", { name: "Add to Cart" })).toHaveLength(4);
  });
});