# Basic Next.js E-commerce Project

A small learning project using:

- Next.js
- React
- Redux Toolkit
- React Redux
- Jest
- React Testing Library

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Tests

```bash
npm test
npm run test:coverage
```

## Project structure

```text
app/
components/
data/
store/
  cartSlice.js
  cartSlice.test.js
  store.js
```

Features:

- Product listing
- Add to cart
- Increase/decrease quantity
- Remove item
- Clear cart
- Cart total
- Redux Toolkit state management
- Jest + React Testing Library tests

This is intentionally kept simple so it can be extended during interview practice.
