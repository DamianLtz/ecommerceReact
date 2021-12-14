 // import { collection, getDocs, getFirestore } from "firebase/firestore";
 
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