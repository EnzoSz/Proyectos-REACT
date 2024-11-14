const ENDPOINT_SEARCH = "https://www.omdbapi.com/?apikey=4214c2f8&s=";
export const searchMovies = async (search) => {
  if (search === "") return null;
  try {
    const url = `${ENDPOINT_SEARCH}${search}`;
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.Search;
    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
    return mappedMovies;
  } catch (e) {
    throw new Error(' No se encontraron peliculas');
    
  }
};
