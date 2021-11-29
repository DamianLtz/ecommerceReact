import React, { useState, useEffect } from "react";
import axios from "axios";
import Productos from "../home/CardProducto";
import Loader from "../common/Loader";
import { useParams } from "react-router";
import JSON from "../common/ListaProductos";

const Categorias = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios
      .get(JSON)
      .then((response) => setProductos(response.data.listaProductos));
  }, []);

  const filtrarPorCategoria = productos.filter(
    (producto) => producto.category === id
  );

  return productos.length ? (
    <>
      <section className="container-lg mt-5">
        <div
          className="d-flex align-items-center justify-content-lg-start justify-content-center px-lg-4 px-4 pb-4"
          id="titulo-container"
        >
          <h2 className="text-nowrap">{id}</h2>
        </div>
        <div
          className="row justify-content-lg-start justify-content-md-center cards-container"
          id="seccionProductos"
        >
          {filtrarPorCategoria.map((producto) => {
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
    </>
  ) : (
    <Loader />
  );
};

export default Categorias;
