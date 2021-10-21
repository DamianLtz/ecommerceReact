import React, { useState, useEffect } from "react";

const MainBotonesCategorias = () => {
  const [categorias, setcategorias] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/612d354d259bcb6118ef5034/7"
    );
    const listacategorias = await data.json();
    const categorias = listacategorias.listaCategorias;
    setcategorias(categorias);
  };
  useEffect(() => {
    obtenerDatosJSON();
  }, []);

  return (
    <section className="container-lg mt-5" id="button-category">
      <div className="row justify-content-md-start justify-content-sm-center categorias-container">
        {categorias.map((categoria) => {
          return (
            <button
              href="#"
              className="btn shadow-none btn-drop-shadow p-0 col-lg-2 col-md-3 col-sm-4 col-xs-6 gy-4 gy-lg-0"
              id={categoria.id} key={categoria.id}
            >
              <div className="btn-categoria-container">
                <div className="btn-categoria">
                  <img src={categoria.image} alt="" />
                  <p className="d-none d-sm-block">{categoria.name}</p>
                </div>
              </div>
              <p className="d-sm-none d-block mb-4 mt-1 fw-bold">
                {categoria.name}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MainBotonesCategorias;
