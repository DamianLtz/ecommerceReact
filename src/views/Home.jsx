import React from "react";

import BotonesCategorias from "../components/home/BotonesCategorias";
import CatalogoProductos from "../components/home/CatalogoProductos";
import CardsCategorias from "../components/home/CardsCategorias";
import SeccionEnvios from "../components/home/SeccionEnvios";
/* import Carousel from "./Carousel"; */
import CarouselAlt from "../components/home/CarouselAlt";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
//eslint-disable-next-line
import { Route, Routes } from "react-router";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-principal">
        {/* <Carousel /> */}
        <CarouselAlt />
        {/* Botones Categorias */}
        <BotonesCategorias />
        {/* Sección de productos */}
        <Routes>
          <Route path="/" element={<CatalogoProductos />} />
          <Route path="/:name" element={<CatalogoProductos />} />
          <Route path="*" element={<CatalogoProductos />} />
        </Routes>
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
