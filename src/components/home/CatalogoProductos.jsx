import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Productos from "./CardProducto";
import Loader from "../common/Loader";
import JSON from "../common/ListaProductos";

const CatalogoProductos = () => {
  const { name } = useParams();
  const [productos, setProductos] = useState([]);

  /* ------------------------------- Version Nueva para traer datos del JSON ----------------------------------------------------------- */
  useEffect(() => {
    axios
      .get(JSON)
      .then((response) => setProductos(response.data.listaProductos));
  }, []);
  /* ------------------------------------------------------------------------------------------ */

  const filtrarPorCategoria = (productos) => {
    const productosFiltrados = productos.filter(
      (producto) => producto.category === name
    );
    return productosFiltrados.map((producto) => {
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
    });
  };

  const catalogoTotalProductos = () => {
    return productos.map((producto) => {
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
    });
  };
  return productos.length ? (
    <section className="container-lg mt-5">
      <div
        className="d-flex align-items-center justify-content-lg-start justify-content-center px-lg-4 px-4 pb-4"
        id="titulo-container"
      >
        <h2 className="text-nowrap">
          {name === "Todos" || name === "ecommerceReact" || !name ? "Catalogo de Productos" : name}
        </h2>
      </div>
      <div
        className="row justify-content-lg-start justify-content-md-center cards-container"
        id="seccionProductos"
      >
        {!name || name === "Todos" || name === "ecommerceReact"
          ? catalogoTotalProductos(productos)
          : filtrarPorCategoria(productos)}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default CatalogoProductos;
