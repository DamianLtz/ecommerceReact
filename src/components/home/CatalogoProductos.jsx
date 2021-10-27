import React, { useState, useEffect } from "react";

import Productos from "./CardProducto";

const CatalogoProductos = () => {
  const [productos, setProductos] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/616cadd44a82881d6c619462/8"
    );
    const listaProductos = await data.json();
    const productos = listaProductos.listaProductos;
    setProductos(productos);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);
  return productos.length !== 0 ? (
    <section className="container-lg mt-5">
      <div
        className="d-flex align-items-center justify-content-lg-start justify-content-center px-lg-4 px-4 pb-4"
        id="titulo-container"
      >
        <h2 className="text-nowrap">Catalogo de productos</h2>
      </div>
      <div
        className="row justify-content-lg-start justify-content-md-center cards-container"
        id="seccionProductos"
      >
        {productos.map((producto) => {
          return (
            <Productos
              key={producto.id}
              image={producto.image}
              oldPrice={producto.oldPrice}
              title={producto.title}
              description={producto.description}
              price={producto.price}
              id={producto.id}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <section className="main-principal">
      <div className="container">
        <div className="showbox">
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogoProductos;
