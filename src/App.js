import React, { createContext, useState } from "react";
import Routes from "./views/routes";

export const ContadorCartContext = createContext();

function App() {
  const [contadorCart, setContadorCart] = useState(6);
  return (
    <React.StrictMode>
      <ContadorCartContext.Provider value={{ contadorCart, setContadorCart }}>
        <Routes />
      </ContadorCartContext.Provider>
    </React.StrictMode>
  );
}

export default App;
