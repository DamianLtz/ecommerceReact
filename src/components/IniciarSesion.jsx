import React from "react";
import { Link } from "react-router-dom";

import twitter from "../img/main/log-in/twitter-icon.svg"
import github from "../img/main/log-in/github-icon.svg"

const IniciarSesion = () => {
  return (
    <main className="body-style vh-100">
      <div className="container-form" id="formulario">
        <h5 className="text-dark pb-2">Iniciar Sesion</h5>
        <div className="inputs">
          <div className="others-input">
            <label>Email</label>
            <input
              type="email"
              placeholder="Ej: jperez@gmail.com"
              name="email"
              id="email"
              className="input-correcto"
            />
            <div
              className="d-flex align-items-center ps-1 pt-2 opacity-0"
              id="emailIncorrecto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#dc3545"
                className="bi bi-exclamation-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="ps-1 text-danger">E-mail Incorrecto</p>
            </div>
          </div>
          <div className="others-input">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
              id="password"
              className="input-correcto"
            />
            <div
              className="d-flex align-items-center ps-1 pt-2 opacity-0"
              id="passwordIncorrecto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#dc3545"
                className="bi bi-exclamation-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="ps-1 text-danger">Contraseña invalida</p>
            </div>
          </div>
          <div className="btn-box">
            <div
              className="d-none align-items-center justify-content-center pt-3"
              id="formulario__invalido"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#dc3545"
                className="bi bi-exclamation-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="error-campos-vacios text-danger ms-2">
                Credenciales Invalidas
              </p>
            </div>
            <p className="text-center">
              Al presionar "Iniciar Sesion" esta aceptando nuestros terminos y
              condiciones.
            </p>
            <button id="boton-registro">Iniciar Sesion</button>
          </div>
        </div>
        <div className="other-content">
          <p>o inicia sesion con: </p>
          <div className="links">
            <a href="#/" aria-disabled="true" tabIndex="-1">
              <img src={twitter} alt="" />
            </a>
            <a href="#/" aria-disabled="true" tabIndex="-1">
              <img src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="pt-3">
          <p>
            ¿No tienes una cuenta? Registrate
            <span className="ps-1">
              <Link to="/registroUsuario" className="boton-registro-aqui">
                Aquí
              </Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default IniciarSesion;
