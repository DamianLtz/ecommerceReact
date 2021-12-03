import { useState, createContext } from "react";

export const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  return (
    <ProductosContext.Provider value={{ productos, setProductos }} displayName="Productos">
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;
