import React from "react";
import Routes from "./views/routes";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/UserContext.jsx";
// import { collection, getDocs, getFirestore } from "firebase/firestore";

function App() {
  // Traigo un solo document //

  // const [productos, setProductos] = useState(null);
  // useEffect(() => {
  //   const db = getFirestore();
  //   const ProductoRef = doc(db, "listaProductos", "sRMzmGBg8gNsqdkiMn4C");
  //   getDoc(ProductoRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProductos(snapshot.data());
  //       setProductos({ ...snapshot.data(), id: snapshot.id });
  //     }
  //   });
  // }, []);

  return (
    <React.StrictMode>
      <UserProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </UserProvider>
    </React.StrictMode>
  );
}

export default App;
