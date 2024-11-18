import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

export const useCart = () => {
    const cart = useContext(CartContext);
    if (!cart) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return cart;
};