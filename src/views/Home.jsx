import React from "react";

import BotonesCategorias from "../components/home/BotonesCategorias";
import CatalogoProductos from "../components/home/CatalogoProductos";
import CardsCategorias from "../components/home/CardsCategorias";
import SeccionEnvios from "../components/home/SeccionEnvios";
/* import Carousel from "./Carousel"; */
import CarouselAlt from "../components/home/CarouselAlt";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

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
