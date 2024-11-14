// import noResults from "../mocks/no-results.json";
export const MoviesList = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

export const NoResults = () => {
  return <p>No se encontraron resultados</p>;
};

export const Movies = ({ movies }) => {
  
  const hasMovies = movies?.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoResults />;
};
