import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import twitter from "../../img/main/log-in/twitter-icon.svg";
import github from "../../img/main/log-in/github-icon.svg";

const IniciarSesion = () => {
  const [inicioExitoso, cambiarInicioExistoso] = useState(false);
  return (
    <main className="body-style vh-100">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.email) {
            errores.email = "E-mail Incorrecto";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "E-mail Incorrecto";
          }

          if (!valores.password) {
            errores.password = "Contraseña Invalida";
          } else if (!/^.{4,12}$/.test(valores.password)) {
            errores.password = "Contraseña Invalida";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          cambiarInicioExistoso(true);
          console.log(valores);
          if (valores.password && valores.email === localStorage.datosCliente) {
            setTimeout(() => (window.location.href = "index.html"), 450);
          } else {
            <p className="error-campos-vacios text-danger ms-2">
              Credenciales Invalidas
            </p>;
          }
        }}
      >
        {({ errors }) => (
          <Form className="container-form" id="formulario">
            <h1 className="text-dark pb-2 fs-5">Iniciar Sesion</h1>
            <div className="inputs">
              <div className="others-input">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  placeholder="Ej: jperez@gmail.com"
                  name="email"
                  id="email"
                  className="input-correcto"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="d-flex align-items-center ps-1 pt-2">
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
                      <p className="ps-1 text-danger">{errors.email}</p>
                    </div>
                  )}
                />
              </div>
              <div className="others-input">
                <label htmlFor="password">Contraseña</label>
                <Field
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  id="password"
                  className="input-correcto"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="d-flex align-items-center ps-1 pt-2">
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
                      <p className="ps-1 text-danger">{errors.password}</p>
                    </div>
                  )}
                />
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
                  Al presionar "Iniciar Sesion" esta aceptando nuestros terminos
                  y condiciones.
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
              <p className="text-nowrap">
                ¿No tienes una cuenta? Registrate
                <span className="ps-1">
                  <Link to="/registroUsuario" className="boton-registro-aqui">
                    Aquí
                  </Link>
                </span>
              </p>
            </div>
            {inicioExitoso && (
              <p className="text-success fw-bold pt-3">Ha Iniciado Sesion.</p>
            )}
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default IniciarSesion;
