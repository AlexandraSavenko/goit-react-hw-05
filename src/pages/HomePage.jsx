import { useEffect, useState } from "react";
import { fetchdata } from "../fetchdata";
import MovieList from "../components/MovieList/MovieList";
export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchedData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchdata(
          1,
          "",
          "trending/movie/day?language=en-US"
        );
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchedData();
  }, []);
  return (
    <div>
      <h2>Trending films</h2>
      {error && <b>Error!!!</b>}
      {loading && <b>LOADING...</b>}
      {trendingMovies.length > 0 && <MovieList allMovies={trendingMovies} />}
    </div>
  );
}
