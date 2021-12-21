import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CartContext } from "../contexts/CartContext";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  writeBatch,
} from "firebase/firestore";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Coin from "../img/main/coin.png";

const Checkout = () => {
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [compradorActual, setCompradorActual] = useState([]);
  const [idOrder, setIdOrder] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  const cartTotal = (cart) =>
    cart.reduce((acc, e) => acc + e.price * e.quantity, 0);

  const firestoreOrder = useCallback(() => {
    const db = getFirestore();
    const ordersCollection = collection(db, "Orders");
    addDoc(ordersCollection, { cart, compradorActual }).then(({ id }) => {
      setIdOrder(id);
    });
  }, [cart, compradorActual]);

  useEffect(() => {
    const updateStock = () => {
      const db = getFirestore();

      const batch = writeBatch(db);

      cart.forEach((item) => {
        const productosRef = doc(db, "ListaProductos", item.id);
        batch.update(productosRef, { stock: item.stock - item.quantity });
      });

      batch.commit();
    };
    if (pagoExitoso) {
      updateStock();
      return firestoreOrder();
    }
  }, [pagoExitoso, firestoreOrder, cart]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {pagoExitoso === true ? (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Muchas Gracias por su compra!
                  </h5>
                </div>
                <div className="modal-body">
                  <p>Su número de orden es: {idOrder}</p>
                  <p className="pt-3">
                    En su casilla de e-mail recibira más detalles de la compra
                  </p>
                </div>
                <div className="modal-footer">
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        setCart([]);
                      }}>
                      Volver al catalogo
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ha Ocurrido un error en la compra
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>
                    Su pedido no ha podido ser procesado debido a un error en
                    los datos ingresados.
                  </p>
                  <p className="pt-3">
                    Por favor verifique los datos ingresados.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal">
                    Cerrar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <header>
        <Navbar />
      </header>
      <main className="main-principal">
        <section className="container-lg">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 order-2 order-md-0">
              <div className="d-flex">
                <Formik
                  initialValues={{
                    nombre: "",
                    apellido: "",
                    email: "",
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
                    } else if (
                      !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)
                    ) {
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
                    return errores;
                  }}
                  onSubmit={(valores) => {
                    setCompradorActual(valores);
                    setPagoExitoso(true);
                  }}>
                  {({ errors }) => (
                    <Form className="container-form">
                      <h1 className="text-dark pb-2 fs-5">
                        Complete sus datos
                      </h1>
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
                                    viewBox="0 0 16 16">
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
                                    viewBox="0 0 16 16">
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
                                  viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                </svg>
                                <p className="ps-1 text-danger">
                                  {errors.email}
                                </p>
                              </div>
                            )}
                          />
                        </div>
                        <div className="btn-box">
                          <button
                            type="submit"
                            className="btn btn-primary mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Pagar
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mb-md-0">
              <div className="d-flex flex-column align-items-center align-items-md-start">
                <h1>Resumen de Compra:</h1>
                <p className="fs-3 pt-3">
                  Cantidad de Productos:
                  <span className="fs-3 ps-2 fw-bold text-primary">
                    {cart.length}
                  </span>
                </p>
                <div className="d-flex align-items-center pt-3">
                  <p className="fs-3">Precio Total:</p>
                  <img src={Coin} alt="" className="coin mx-2" />
                  <span className="fs-3 text-primary fw-bold">{`${cartTotal(
                    cart
                  )}`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
