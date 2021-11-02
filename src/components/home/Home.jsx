import React from "react";

import BotonesCategorias from "./BotonesCategorias";
import CatalogoProductos from "./CatalogoProductos";
import CardsCategorias from "./CardsCategorias";
import SeccionEnvios from "./SeccionEnvios";
/* import Carousel from "./Carousel"; */
import CarouselAlt from "./CarouselAlt";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-principal" id="main-app">
        {/* <Carousel /> */}
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
      <Footer />
    </>
  );
};

export default Home;
