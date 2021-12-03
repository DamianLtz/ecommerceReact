import { useState } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* Funcion de agregar al carrito, esta funcion va a editar el state del context
y contendra toda la logica necesaria,por ejemplo buscamos el item y si existe solo le sumamos 
la cantidad nueva*/

  const addItem = (producto, cantidad, stock) => {
    if (producto.quantity >= stock) {
      return false;
    }
    const product = isInCart(producto.id); // devuelve el elemento seleccionado.
    if (product) {
      /*Si el producto esta en cart, le sumamos la nueva cantidad, si no, solo lo agregamos */
      return setCart([
        ...removeDuplicateItem(producto.id), // devuelve los elementos distintos al seleccionado
        { ...product, quantity: product.quantity + cantidad }, // cantidad = contador *Chequear aqui mañana*
      ]);
    }
    setCart([...cart, { ...producto, quantity: cantidad }]);
  };

  // -------------------------------------- //

  const minusItem = (producto, cantidad) => {
    let product = isInCart(producto.id);
    if (product.quantity === 1) {
      return false;
    }
    if (product) {
      /*Si el producto esta en cart, le sumamos la nueva cantidad, si no, solo lo agregamos */
      return setCart([
        ...removeDuplicateItem(producto.id), // devuelve los elementos distintos al seleccionado
        { ...product, quantity: product.quantity - cantidad }, // cantidad = contador *Chequear aqui mañana*
      ]);
    }
    setCart([...cart, producto]);
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
      displayName="Cart"
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
