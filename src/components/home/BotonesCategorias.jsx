import React, { useState, useEffect } from "react";

import ButtonCategoria from "../common/BotonCategoria";

const BotonesCategorias = () => {
  const [categorias, setcategorias] = useState([]);
  const obtenerDatosJSON = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/b/616cadd44a82881d6c619462/8"
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
          return <ButtonCategoria key={categoria.id} categoria={categoria} />;
        })}
      </div>
    </section>
  );
};

export default BotonesCategorias;
