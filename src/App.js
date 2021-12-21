import React from "react";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Routes from "./views/routes";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <React.StrictMode>
      <CartProvider>
        <ScrollToTop />
        <Routes />
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
