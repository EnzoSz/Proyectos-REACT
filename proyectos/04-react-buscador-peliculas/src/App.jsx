import { useState } from "react";
import "./App.css";
// import { useRef } from "react"; // te permite crear una referencia mutable que puedes actualizar
import { Movies } from "./components/Movies";
import { useMovies, useSearch } from "./hooks";

function App() {
  const [sort, setSort] = useState(false);
  const [search, setSearch, error] = useSearch("");
  const { movies, getMovies, loading, debouncedGetMovies } = useMovies({ search, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };
  return (
    <>
      <header className="header">
        <h1>Buscador de peliculas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={handleChange}
            name="query"
            type="text"
            placeholder="Avengers, Spiderman, Ironman..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <h2>Resultados</h2>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </>
  );
}

export default App;
