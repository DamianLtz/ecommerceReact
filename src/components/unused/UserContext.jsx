import { useState, createContext, useEffect } from "react";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const clickRegistro = (clienteNuevo) => {
    if (
      clienteNuevo.nombre !== "" &&
      clienteNuevo.apellido !== "" &&
      clienteNuevo.email !== "" &&
      clienteNuevo.password !== ""
    ) {
      const db = getFirestore();
      const usersCollection = collection(db, "Users");
      addDoc(usersCollection, clienteNuevo).then(({ id }) => {
        console.log(id);
      });
    }
  };
  //eslint-disable-next-line
  const logOff = () => {
    localStorage.setItem("userLogged", JSON.stringify([]));
  };

  useEffect(() => {
    const db = getFirestore();
    const userRef = doc(db, "Users", "JlALAyfYJ1t3CYARTA4k");
    getDoc(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        setUser({ ...snapshot.data(), id: snapshot.id });
      } else {
        alert("no existe!")
      }
    });

  }, [])

  return (
    <UserContext.Provider
      value={{ user, setUser, clickRegistro, logOff }}
      displayName="User"
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
