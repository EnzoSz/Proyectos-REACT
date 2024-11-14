import { useRef, useState, useMemo } from "react";
import { searchMovies } from "../services/movies";
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState(null);

  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async () => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const movies = await searchMovies(search);
        setMovies(movies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, [search]);

  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies;
  const sortedMovies = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [sort, movies]
  );
  return { movies: sortedMovies, getMovies, loading, errors };
}
