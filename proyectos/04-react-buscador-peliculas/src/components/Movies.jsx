import noResults from "../mocks/no-results.json";
export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

export const NoResults = () => {
  return <h1>{noResults.Error}</h1>;
};

export const Movies = ({ movies }) => {
  
  const hasMovies = movies.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoResults />;
};
