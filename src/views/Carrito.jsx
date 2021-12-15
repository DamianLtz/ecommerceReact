import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import { CartContext } from "../contexts/CartContext";
import ItemCarrito from "../components/common/ItemCarrito";
import BotonPagar from "../components/common/BotonPagar";
import CartEmptyMsg from "../components/common/CartEmptyMsg";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  const [sortCart, setSortCart] = useState([]);
  useEffect(() => {
    let sort = cart.sort((a, b) => a.order - b.order);
    setSortCart(sort);
  }, [cart]);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-principal">
        <section className="container-lg">
          <h1 className="pt-5 fs-3">Tu carrito</h1>
          <div className="container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3">
            {!sortCart.length || cart === [] ? (
              <CartEmptyMsg />
            ) : (
              sortCart.map((item) => {
                return (
                  <ItemCarrito
                    producto={item}
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                    quantity={item.quantity}
                  />
                );
              })
            )}
            {cart.length !== 0 ? <BotonPagar /> : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Carrito;
