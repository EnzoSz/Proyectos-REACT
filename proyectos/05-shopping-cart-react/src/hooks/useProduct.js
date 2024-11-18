import { useCallback, useState } from "react";
import { getProducts } from "../services/products";
export function useProduct () {
    const [products, setProduct] = useState({});
    const recuperarProducts = useCallback(() => {
        setProduct(getProducts())
    }, []);
    return { products, setProduct };
}