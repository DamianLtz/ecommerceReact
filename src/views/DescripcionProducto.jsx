import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Loader from "../components/common/Loader";
import Contador from "../components/common/ContadorItems";
import AddToCart from "../components/common/AddToCart"
import coin from "../img/main/coin.png";

const DescripcionProducto = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/616cadd44a82881d6c619462/8")
      .then((response) => setProductos(response.data.listaProductos));
  }, []);

  const producto = productos[id];

  return productos.length ? (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-principal">
        <section className="container-fluid bg-principal">
          <div className="row p-5">
            <div className="d-flex align-items-center mb-4 ps-3">
              <Link to="/">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="left-arrow"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 6C0.75 5.58579 1.08579 5.25 1.5 5.25H12.5C12.9142 5.25 13.25 5.58579 13.25 6C13.25 6.41421 12.9142 6.75 12.5 6.75H1.5C1.08579 6.75 0.75 6.41421 0.75 6Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.53033 0.96967C6.82322 1.26256 6.82322 1.73744 6.53033 2.03033L2.56066 6L6.53033 9.96967C6.82322 10.2626 6.82322 10.7374 6.53033 11.0303C6.23744 11.3232 5.76256 11.3232 5.46967 11.0303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.46967 0.96967C5.76256 0.676777 6.23744 0.676777 6.53033 0.96967Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <p className="px-3">Home</p>
              <svg
                width="14"
                height="18"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841708 0.646447 0.646445C0.841709 0.451183 1.15829 0.451183 1.35355 0.646445L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536Z"
                  fill="currentColor"
                />
              </svg>
              <p className="ps-3 text-truncate">{`Información de ${producto.title}`}</p>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="d-flex justify-content-center align-items-center background-producto">
                <img src={producto.image} alt="" className="producto p-3" />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 ms-0 ms-md-5 d-flex flex-column justify-content-center">
              <h1 className="pt-4 pt-lg-0 pb-3 pb-lg-2">{producto.title}</h1>
              <p className="description-truncate">{producto.longDescription}</p>
              <Contador stock={20} />
              <div className="d-flex align-items-center justify-content-center justify-content-md-start my-3">
                <p>Comprar por:</p>
                <img src={coin} alt="" className="coin mx-2" />
                <p>{producto.price}</p>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <AddToCart />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default DescripcionProducto;
