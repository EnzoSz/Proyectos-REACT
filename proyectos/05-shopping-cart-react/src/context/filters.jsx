import { createContext, useState } from "react";

// Crear el contexto
// Este es el que tenemos que consumit
export const FiltersContext = createContext();

// Crear el proveedor, para proveer el contexto
// este es el que va a proveer el acceso a la informacion
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 200,
  });
  return (
    <FiltersContext.Provider
      value={{ filters, setFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
