import React from "react";

import BotonesCategorias from "./MainBotonesCategorias";
import CatalogoProductos from "./MainCatalogoProductos";
import CardsCategorias from "./MainCardsCategorias";
import SeccionEnvios from "./MainSeccionesEnvios";
import CarouselAlt from "./MainCarouselAlt";

const Main = () => {
  return (
    <main className="main-principal" id="main-app">
      <div id="index-view">
        <CarouselAlt />
        {/* Botones Categorias */}
        <BotonesCategorias />
        {/* Sección de productos */}
        <CatalogoProductos />
        {/* Cards Electro y Electrobelleza */}
        <CardsCategorias />
        {/* Seccion Envíos */}
        <SeccionEnvios />
      </div>
    </main>
  );
};

export default Main;
