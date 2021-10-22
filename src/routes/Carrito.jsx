import React from "react";

import Header from "./carrito/Header";
import Footer from "./carrito/Footer";

const Carrito = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container-lg">
          <h1 className="pt-5 fs-3">Tu carrito</h1>
          <div
            className="container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3"
            id="carritoDeCompras"
          ></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Carrito;
