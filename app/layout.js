import StoreProvider from "../components/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "Basic Shop",
  description: "Next.js + Redux Toolkit + Jest e-commerce demo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}