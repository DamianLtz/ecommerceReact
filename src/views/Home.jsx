import React from "react";
import BotonesCategorias from "../components/home/BotonesCategorias";
import CatalogoProductos from "../components/home/CatalogoProductos";
import CardsCategorias from "../components/home/CardsCategorias";
import SeccionEnvios from "../components/home/SeccionEnvios";
import CarouselAlt from "../components/home/CarouselAlt";
// import FirestoreProducts from "../components/unused/FirestoreProducts";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { Route, Routes } from "react-router";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-principal">
        <CarouselAlt />
        <BotonesCategorias />
        {/* El siguiente componente comentado solo es para agregar Todos los productos a Firebase. */}
        {/* <FirestoreProducts /> */}
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
