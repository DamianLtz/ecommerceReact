import React, { useContext } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import { CartContext } from "../contexts/CartContext";
import ItemCarrito from "../components/common/ItemCarrito";
import BotonPagar from "../components/common/BotonPagar";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-principal">
        <section className="container-lg">
          <h1 className="pt-5 fs-3">Tu carrito</h1>
          <div className="container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3">
            {cart.map((item) => {
              return (
                <ItemCarrito
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
            <BotonPagar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Carrito;
