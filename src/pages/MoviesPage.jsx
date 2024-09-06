import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchdata } from "../fetchdata";
import MovieList from "../components/MovieList/MovieList";

export default function MoviesPage() {
  const [errorQuery, setErrorQuery] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieName.value.trim();
    if (!query) {
      setErrorQuery(true);
      return;
    }
    params.set("movieName", query);
    setParams(params);

    e.target.reset();
    setErrorQuery(false);
  };
  const movieName = params.get("movieName");

  useEffect(() => {
    if (!movieName) return;
    async function fetchedData() {
      try {
        setLoading(true);
        const data = await fetchdata(1, movieName, "search/movie");
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchedData();
  }, [movieName]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />

        <button type="submit">Search</button>
      </form>
      {errorQuery && <p>You need to fill in your query!</p>}
      {error && <b>Error!!!</b>}
      {loading && <b>LOADING...</b>}
      {movies.length > 0 && <MovieList allMovies={movies} />}
    </div>
  );
}
