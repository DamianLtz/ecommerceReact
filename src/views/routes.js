import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import IniciarSesion from "./IniciarSesion";
import RegistroUsuario from "./RegistroUsuario";
import Carrito from "./Carrito";
import DescripcionProducto from "./DescripcionProducto";
import Categorias from "./Categorias";

const routes = () => {
  return (
    <Routes>
      <Route index path="/ecommerceReact" element={<Home />} />
      <Route path={`/DescripcionProducto/:id`} element={<DescripcionProducto />}/>
      <Route path={`/Categoria/:id`} element={<Categorias />}/>
      <Route path="inicioSesion" element={<IniciarSesion />} />
      <Route path="/registroUsuario" element={<RegistroUsuario />} />
      <Route path="/Carrito" element={<Carrito />} />
    </Routes>
  );
};

export default routes;
