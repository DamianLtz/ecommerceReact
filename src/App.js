import React from "react";
import Routes from "./views/routes";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <React.StrictMode>
      <CartProvider>
        <Routes />
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
