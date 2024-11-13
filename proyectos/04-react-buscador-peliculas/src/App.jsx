import { useState, useEffect } from "react";
import "./App.css";
// import { useRef } from "react"; // te permite crear una referencia mutable que puedes actualizar
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState();
  const [error, setError] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ query });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!query) {
      setError("No se puede buscar una pelicula vacia");
      return;
    };
    if (query.match(/^\d+$/)) {
      setError("No se puede buscar un numero");
      return;
    }
    if (query.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [query]);
  return (
    <>
      <header className="header">
        <h1>Buscador de peliculas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={handleChange}
            name="query"
            type="text"
            placeholder="Avengers, Spiderman, Ironman..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <h2>Resultados</h2>
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
