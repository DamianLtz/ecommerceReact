import React, { useState, useEffect } from "react";
import axios from "axios";
import Productos from "./CardProducto";
import Loader from "../common/Loader";

const CatalogoProductos = () => {
  const [productos, setProductos] = useState([]);
    /* --------------------------------- Version Anterior para traer datos del JSON--------------------------------------------------------- */
  // const obtenerDatosJSON = async () => {
  //   const data = await fetch(
  //     "https://api.jsonbin.io/b/616cadd44a82881d6c619462/8"
  //   );
  //   const listaProductos = await data.json();
  //   const productos = listaProductos.listaProductos;
  //   setProductos(productos);
  // };
  // useEffect(() => {
  //   obtenerDatosJSON();
  // }, []);
  /* ------------------------------- Version Nueva para traer datos del JSON ----------------------------------------------------------- */
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/616cadd44a82881d6c619462/8")
      .then((response) => setProductos(response.data.listaProductos));
  }, []);
  /* ------------------------------------------------------------------------------------------ */
  return productos.length ? (
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
    <Loader />
  );
};

export default CatalogoProductos;
