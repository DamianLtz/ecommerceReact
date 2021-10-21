import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/header/logo.svg"
import search from "../img/header/search.svg"
import shoppingCart from "../img/header/shopping-cart.svg"
import coin from "../img/main/coin.png"

const Carrito = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light w-100">
          <div className="container-lg">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <form className="d-flex align-items-center form-style">
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    aria-label="Search"
                  />
                  <a href="#/" className="me-3">
                    <img src={search} alt="" />
                  </a>
                </form>
              </ul>
              <div className="cuenta--container" id="datos-cliente-container">
                <div className="shop-cart-container">
                  <img
                    src={shoppingCart}
                    alt=""
                    className="shop-cart"
                  />
                </div>
                <div
                  className="d-flex align-items-center ms-3"
                  id="monto-container"
                >
                  <img src={coin} alt="" className="coin" />
                  <p id="monto"></p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="container-lg">
          <h1 className="pt-5 fs-3">Tu carrito</h1>
          <div
            className="container-shopcart mt-5 p-lg-5 p-sm-4 p-3 g-3"
            id="carritoDeCompras"
          ></div>
        </section>
      </main>
      <footer>
        <div className="container-lg mt-5 py-5">
          <div className="row">
            <div className="col-lg-4 footer-options py-3 py-lg-0">
              <h4>Mi Cuenta</h4>
              <ul id="footer-options">
                <li>
                  <Link to="/registroUsuario">Crear Cuenta</Link>
                </li>
                <li>
                  <a href="#/">Mis datos</a>
                </li>
                <li>
                  <a href="#/">Mis canjes</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 footer-options py-3 py-lg-0">
              <h4>Ayuda</h4>
              <ul>
                <li>
                  <a href="#/">Terminos y condiciones</a>
                </li>
                <li>
                  <a href="#/">Defensa del consumidor</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 footer-options py-3 py-lg-0">
              <h4>Información de la tienda</h4>
              <ul>
                <li>
                  <a href="#/">Argentina</a>
                </li>
                <li>
                  <a href="#/">Botón de Arrepentimiento</a>
                </li>
              </ul>
            </div>
          </div>
          <h6 className="text-center text-muted pt-5">
            Proyecto CoderHouse: E-Commerce - Damian
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Carrito;
