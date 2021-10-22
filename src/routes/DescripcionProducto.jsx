import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

import Left from "../img/main/descripcionProducto/ArrowLeft.svg";
import CaretDown from "../img/main/descripcionProducto/CaretDown.svg";
import coin from "../img/main/coin.png";

const DescripcionProducto = () => {
  const { id } = useParams();
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

  const producto = productos[id];

  return productos.length !== 0 ? (
    <>
      <Header />
      <main className="main-principal">
        <section className="container-fluid bg-principal">
          <div className="row p-5">
            <div className="d-flex align-items-center mb-4 ps-3">
              <Link to="/">
                <img src={Left} alt="" className="left-arrow" />
              </Link>
              <p className="text-light px-3">Home</p>
              <img src={CaretDown} alt="" />
              <p className="text-light ps-3">{`Información de ${producto.title}`}</p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-center align-items-center background-descripcion h-100">
                <img
                  src={producto.image}
                  alt=""
                  className="img-fluid producto p-3"
                />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center">
              <h1 className="text-light pt-4 pt-lg-0 pb-3 pb-lg-2">
                {producto.title}
              </h1>
              <p className="text-light description-truncate">
                {producto.longDescription}
              </p>
              <div className="d-flex align-items-center my-3">
                <p className="text-light">Comprar por:</p>
                <img src={coin} alt="" className="coin mx-2" />
                <p className="text-light">{producto.price}</p>
              </div>
              <div className="mb-3">
                <button className="d-block btn btn-primary">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    <main className="main-principal">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center loader">
          <div className="spinner-grow text-primary" role="status"></div>
          <div className="spinner-grow text-secondary" role="status"></div>
          <div className="spinner-grow text-success" role="status"></div>
          <div className="spinner-grow text-danger" role="status"></div>
          <div className="spinner-grow text-warning" role="status"></div>
          <div className="spinner-grow text-info" role="status"></div>
          <div className="spinner-grow text-crimson" role="status"></div>
          <div className="spinner-grow text-dark" role="status"></div>
        </div>
      </div>
    </main>
  );
};

export default DescripcionProducto;
