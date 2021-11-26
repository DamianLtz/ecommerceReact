import React, { useEffect, useState } from "react";
import axios from "axios";

import ButtonCategoria from "../common/BotonCategoria";

const BotonesCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/616cadd44a82881d6c619462/8")
      .then((response) => setCategorias(response.data.listaCategorias));
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
