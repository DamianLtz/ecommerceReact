import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router";
import Productos from "./CardProducto";
import Loader from "../common/Loader";

const CatalogoProductos = () => {
  const { name } = useParams();
  const [productos, setProductos] = useState([]);

  // --------- Traigo la Coleccion de elementos de Firebase ---------------- //

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "ListaProductos");

    getDocs(productosCollection).then((snapshot) => {
      setProductos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  /* ------------------------------------------------------------------------------------------ */

  const filtrarPorCategoria = (productos) => {
    const productosFiltrados = productos.filter(
      (producto) => producto.category === name
    );
    return productosFiltrados.map((producto) => {
      return <Productos key={producto.id} {...producto} />;
    });
  };

  const catalogoTotalProductos = () => {
    return productos.map((producto) => {
      return <Productos key={producto.id} {...producto} />;
    });
  };
  return productos.length ? (
    <section className="container-lg mt-5">
      <div className="d-flex align-items-center justify-content-lg-start justify-content-center px-lg-4 px-4 pb-4">
        <h2 className="text-nowrap">
          {name === "Todos" || name === "ecommerceReact" || !name
            ? "Catalogo de Productos"
            : name}
        </h2>
      </div>
      <div className="row justify-content-lg-start justify-content-md-center cards-container">
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
