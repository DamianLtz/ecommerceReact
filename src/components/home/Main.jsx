import React from "react";

import BotonesCategorias from "./BotonesCategorias";
import CatalogoProductos from "./CatalogoProductos";
import CardsCategorias from "./CardsCategorias";
import SeccionEnvios from "./SeccionEnvios";
import CarouselAlt from "./CarouselAlt";

const Main = () => {
  return (
    <main className="main-principal" id="main-app">
      <CarouselAlt />
      {/* Botones Categorias */}
      <BotonesCategorias />
      {/* Sección de productos */}
      <CatalogoProductos />
      {/* Cards Electro y Electrobelleza */}
      <CardsCategorias />
      {/* Seccion Envíos */}
      <SeccionEnvios />
    </main>
  );
};

export default Main;
