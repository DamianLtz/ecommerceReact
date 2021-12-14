import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Carrito from "./Carrito";
import DescripcionProducto from "./DescripcionProducto";
import CatalogoProductos from "../components/home/CatalogoProductos";
import Checkout from "./Checkout";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":name" element={<CatalogoProductos />} />
        </Route>
        <Route
          path={`/DescripcionProducto/:id`}
          element={<DescripcionProducto />}/>
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default routes;
