import React, { useState } from "react";
import Routes from "./views/routes";
import { CartContext } from "./contexts/CartContext";
import { ContadorUnidades } from "./contexts/ContadorUnidades";
import { UserContext } from "./contexts/UserContext.jsx";
import { listaProductosContext } from "./contexts/listaProductos.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [contador, setContador] = useState(1);
  const [user, setUser] = useState([]);
  const [productos, setProductos] = useState([]);
  //  37:40
  return (
    <React.StrictMode>
      <listaProductosContext.Provider value={{ productos, setProductos }}>
        <UserContext.Provider value={{ user, setUser }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <ContadorUnidades.Provider value={{ contador, setContador }}>
              <Routes />
            </ContadorUnidades.Provider>
          </CartContext.Provider>
        </UserContext.Provider>
      </listaProductosContext.Provider>
    </React.StrictMode>
  );
}

export default App;
