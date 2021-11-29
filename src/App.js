import React, { createContext, useState } from "react";
import Routes from "./views/routes";

export const ContadorCartContext = createContext();
export const ContadorProductosContext = createContext();

function App() {
  const [contadorCart, setContadorCart] = useState(0);
  const [ContadorProductos, setContadorProductos] = useState(1)
  return (
    <React.StrictMode>
      <ContadorCartContext.Provider value={{ contadorCart, setContadorCart }}>
        <ContadorProductosContext.Provider value={{ContadorProductos, setContadorProductos}}>
          <Routes />
        </ContadorProductosContext.Provider>
      </ContadorCartContext.Provider>
    </React.StrictMode>
  );
}

export default App;
