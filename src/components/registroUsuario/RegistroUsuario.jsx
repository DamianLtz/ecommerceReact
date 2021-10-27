import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import twitter from "../../img/main/log-in/twitter-icon.svg";
import github from "../../img/main/log-in/github-icon.svg";

const RegistroUsuario = () => {
  const [registroExitoso, cambiarRegistroExistoso] = useState(false);
  return (
    <main className="body-style vh-100">
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.nombre) {
            errores.nombre = "Nombre incorrecto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "Nombre incorrecto";
          }

          if (!valores.apellido) {
            errores.apellido = "Apellido Incorrecto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido = "Apellido Incorrecto";
          }

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
          cambiarRegistroExistoso(true);
          console.log(valores);
          setTimeout(() => (window.location.href = "index.html"), 450);
        }}
      >
        {({ errors }) => (
          <Form className="container-form" id="formulario">
            <h1 className="text-dark pb-2 fs-5">Registrarse</h1>
            <div className="inputs">
              <div className="name-input">
                <div className="input-nombre">
                  <label htmlFor="nombre">Nombre</label>
                  <Field
                    type="text"
                    placeholder="Ej: Juan"
                    name="nombre"
                    id="nombre"
                    className="input-correcto"
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="d-flex justify-content-center align-items-center pt-2">
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
                        <p className="ps-1 text-danger text-center">
                          {errors.nombre}
                        </p>
                      </div>
                    )}
                  />
                </div>
                <div className="input-apellido">
                  <label htmlFor="apellido">Apellido</label>
                  <Field
                    type="text"
                    placeholder="Ej: Perez"
                    name="apellido"
                    id="apellido"
                    className="input-correcto"
                  />
                  <ErrorMessage
                    name="apellido"
                    component={() => (
                      <div className="d-flex justify-content-center align-items-center pt-2">
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
                        <p className="ps-1 text-danger text-center">
                          {errors.apellido}
                        </p>
                      </div>
                    )}
                  />
                </div>
              </div>
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
                    Por favor rellene el formulario correctamente.
                  </p>
                </div>
                <p className="text-center">
                  Al presionar "Registrarse" esta aceptando nuestros terminos y
                  condiciones.
                </p>
                <button type="submit" id="boton-registro">
                  Registrarse
                </button>
              </div>
            </div>
            <div className="other-content">
              <p>o registrate con: </p>
              <div className="links">
                <a href="#/" aria-disabled="true" tabIndex="-1">
                  <img src={twitter} alt="" />
                </a>
                <a href="#/" aria-disabled="true" tabIndex="-1">
                  <img src={github} alt="" />
                </a>
              </div>
            </div>
            {registroExitoso && (
              <p className="text-success fw-bold pt-3">Registro Exitoso</p>
            )}
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default RegistroUsuario;
