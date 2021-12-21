import React from "react";
import Advertencia from "../img/main/aviso.png";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

const UnderConstruction = () => {
  return (
    <>
      <Navbar />
      <main className="main-principal">
        <div className="vh-100">
          <div className="pt-5 d-flex align-items-center justify-content-center">
            <img
              src={Advertencia}
              alt="Aviso!"
              className="img-fluid"
              style={{ width: 150, height: 125 }}
            />
            <h1 className="text-dark text-center">
              Ups! esta página se encuentra en construccion
              <br />
              Intenta nuevamente más tarde
            </h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UnderConstruction;
