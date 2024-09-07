import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchdata } from "../fetchdata";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

export default function MoviesPage() {
  // const location = useLocation();

  const [errorQuery, setErrorQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setSearchParams] = useSearchParams();
  const movieName = params.get("movieName");

  async function handleSubmit(value) {
    if (!value.trim()) {
      setErrorQuery(true);
      return;
    }
    setErrorQuery(null);
    setSearchParams({ movieName: value });
  }

  useEffect(() => {
    if (!movieName) return;
    async function fetchedData() {
      try {
        setLoading(true);
        const data = await fetchdata(1, movieName, "search/movie");
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchedData();
  }, [movieName]);
  // const movieName = params.get("movieName");
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {errorQuery && <p>You need to fill in your query!</p>}
      {error && <b>Error!!!</b>}
      {loading && <b>LOADING...</b>}
      {movies.length > 0 && <MovieList allMovies={movies} />}
    </div>
  );
}
