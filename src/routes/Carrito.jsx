import React from "react";

import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const Carrito = () => {
  return (
    <>
      <Header />
      <main className="main-principal">
        <section className="container-lg">
          <h1 className="pt-5 fs-3">Tu carrito</h1>
          <div
            className="container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3"
            id="carritoDeCompras"
          ></div>
        </section>
      </main>
      <Footer visible="d-none"/>
    </>
  );
};

export default Carrito;
