import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Left from "../img/main/descripcionProducto/ArrowLeft.svg";
import CaretDown from "../img/main/descripcionProducto/CaretDown.svg";

import moto from "../img/main/tecno/motog9plus.png";
import coin from "../img/main/coin.png";

const DescripcionProducto = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/612d354d259bcb6118ef5034/7"
    );
    const listaProductos = await data.json();
    const productos = listaProductos.listaProductos;
    setProductos(productos);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  const producto = productos[id];
  console.log(producto);

  return productos.length !== 0 ? (
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
              <img src={moto} alt="" className="img-fluid producto p-3" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center">
            <h1 className="text-light pt-4 pt-lg-0 pb-3 pb-lg-2">{producto.title}</h1>
            <p className="text-light description-truncate">
              Máxima Variedad de recetas | Jarra licuadora para hacer licuados,
              triturar y mezclar | Accesorio para exprimir cítricos | Discos de
              corte con insertos metálicos | Poderosa precisión | Potente motor
              de 650 w | 2 velocidades y pulsador para máximo control |
              Tecnología PowerChop para una performance superior de procesado de
              alimentos | Accesorios para alcanzar 32 funciones | Materiales de
              baja adherencia y fácil limpieza | Accesorios aptos para
              lavavajilla | Origen: Brasil | Garantía: 2 años.
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

export default DescripcionProducto;
