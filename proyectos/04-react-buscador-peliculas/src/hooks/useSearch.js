import { useState, useEffect, useRef } from "react";
export function useSearch() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState();
    const isFirstSearch = useRef(true);
    useEffect(() => {
      if (isFirstSearch.current) {
        isFirstSearch.current = search === "";
        return;
      }
      if (search === "") {
        setError("No se puede buscar una pelicula vacia");
        return;
      };
      if (search.match(/^\d+$/)) {
        setError("No se puede buscar un numero");
        return;
      }
      if (search.length < 3) {
        setError("La busqueda debe tener al menos 3 caracteres");
        return;
      }
      setError(null);
    }, [search]);
  
    return [search, setSearch, error];
  }