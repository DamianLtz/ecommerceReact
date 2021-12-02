import { useState } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);
// Componente que contiene toda la logica del Contexto
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  /* Funcion de agregar al carrito, esta funcion va a editar el state del context
y contendra toda la logica necesaria,por ejemplo buscamos el item y si existe solo le sumamos 
la cantidad nueva*/
  const addItem = (producto, cantidad) => {
    // console.log(cantidad)
    const product = isInCart(producto.id); // devuelve el elemento seleccionado.
    console.log(product);
    if (product) {
      /*Si el producto esta en cart, le sumamos la nueva cantidad, si no, solo lo agregamos */
      return setCart([
        ...removeDuplicateItem(producto.id), // devuelve los elementos distintos al seleccionado
        { ...product, quantity: product.quantity + cantidad }, // cantidad = contador *Chequear aqui mañana*
      ]);
    }
    setCart([...cart, producto]);
  };

  // -------------------------------------- //

  const minusItem = (producto, cantidad) => {
    console.log(producto.id, cantidad);
    let product = isInCart(producto.id); // devuelve el elemento si YA esta en el carrito.
    // console.log(product)
    if (product) {
      /*Si el producto esta en cart, le sumamos la nueva cantidad, si no, solo lo agregamos */
      return setCart([
        ...removeDuplicateItem(producto.id), // devuelve los elementos distintos al seleccionado
        { ...product, quantity: product.quantity - cantidad }, // cantidad = contador *Chequear aqui mañana*
      ]);
    } else {
      setCart([{ ...cart, producto, quantity: product.quantity + cantidad }]);
      // setCart([...cart, producto]);
    }
  };

  /* Funcion exclusiva para el carrito, si estando en el carrito le das a la x 
eleminiarias ese item del carrito
*/
  const removeDuplicateItem = (id) => {
    return cart.filter((element) => element.id !== id);
  };
  /* Funcion exclusiva para el carrito, si estando en el carrito le das a la x 
eleminiarias ese item del carrito
*/
  const removeItem = (id) => {
    const productos = cart.filter((element) => element.id !== id);
    return setCart([...productos]);
  };
  /* Funcion por si tienes un boton "Eliminar todo" en el cart, borrarias todo sin mas */
  const clear = () => {
    setCart([]);
  };
  /* Funcion de uso interno para buscar si un item existe */
  const isInCart = (id) => {
    return cart.find((element) => element.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        minusItem,
        removeDuplicateItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
