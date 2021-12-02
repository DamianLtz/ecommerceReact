import React from "react";
//eslint-disable-next-line
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import IniciarSesion from "./IniciarSesion";
import RegistroUsuario from "./RegistroUsuario";
import Carrito from "./Carrito";
import DescripcionProducto from "./DescripcionProducto";
import CatalogoProductos from "../components/home/CatalogoProductos";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":name" element={<CatalogoProductos />} />
        </Route>
        <Route path={`/DescripcionProducto/:id`} element={<DescripcionProducto />} />
        <Route path="/inicioSesion" element={<IniciarSesion />} />
        <Route path="/registroUsuario" element={<RegistroUsuario />} />
        <Route path="/Carrito" element={<Carrito />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} />  */} {/* No Funciona. */}
      </Routes>
    </>
  );
};

export default routes;