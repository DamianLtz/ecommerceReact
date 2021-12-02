import React from "react";
import Routes from "./views/routes";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/UserContext.jsx";
import ProductosProvider from "./contexts/ListaProductos.jsx";

function App() {
  //  37:40
  return (
    <React.StrictMode>
      <ProductosProvider>
        <UserProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </UserProvider>
      </ProductosProvider>
    </React.StrictMode>
  );
}

export default App;
