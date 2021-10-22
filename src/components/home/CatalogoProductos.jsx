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
    <main className="main-principal">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center loader">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-crimson" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CatalogoProductos;