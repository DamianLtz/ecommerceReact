import React from "react";
import Routes from "./views/routes";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/UserContext.jsx";

function App() {
  //  37:40
  return (
    <React.StrictMode>
      <UserProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </UserProvider>
    </React.StrictMode>
  );
}

export default App;
