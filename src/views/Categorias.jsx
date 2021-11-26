import React, { useState, useEffect } from "react";
import axios from "axios";
import Productos from "../components/home/CardProducto";
import Loader from "../components/common/Loader";
import Navbar from "../components/home/Navbar";
import { useParams } from "react-router";

const Categorias = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/616cadd44a82881d6c619462/8")
      .then((response) => setProductos(response.data.listaProductos));
  }, []);

  const filtrarPorCategoria = productos.filter(
    (producto) => producto.category === id
  );

  return productos.length ? (
    <>
      <Navbar />
      <main className="main-principal">
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
      </main>
    </>
  ) : (
    <Loader />
  );
};

export default Categorias;
