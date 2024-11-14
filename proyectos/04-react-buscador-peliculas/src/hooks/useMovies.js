import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
import debounce from "just-debounce-it";
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState(null);

  const previousSearch = useRef(search);

  // const getMovies = useMemo(() => {
  //   return async ({ search }) => {
  //     if (search === previousSearch.current) return;
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       previousSearch.current = search;
  //       const movies = await searchMovies(search);
  //       setMovies(movies);
  //     } catch (e) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  // }, []);

  // ahora el getMovies pero con useCallback
  const getMovies = useCallback(async ({ search }) => {
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
  }, []);



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

  // function debounce 

  const debouncedGetMovies = useCallback (debounce(search =>{
    console.log("search", search);
    getMovies({ search });
  }, 500), [getMovies]);
  
  return { movies: sortedMovies, getMovies, loading, errors, debouncedGetMovies };
}
