import { createContext, useReducer } from "react";
import { cartReducer, initialState, CART_ACTION_TYPES } from "../reducers/cart";
// Crear el contexto
export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });
  };

  return { state, addToCart, removeFromCart, clearCart };
}
// Crear el proveedor, para proveer el contexto
export const CartProvider = ({ children }) => {

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state , addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
