import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ButtonCategoria from "../common/BotonCategoria";

const BotonesCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "ListaCategorias");

    getDocs(productosCollection).then((snapshot) => {
      setCategorias(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
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
