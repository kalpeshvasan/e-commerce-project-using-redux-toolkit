import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div>
          <h1>Basic Shop</h1>
          <p>Next.js + Redux Toolkit + Jest</p>
        </div>
        <Cart />
      </header>

      <section>
        <h2>Products</h2>
        <ProductList />
      </section>
    </main>
  );
}