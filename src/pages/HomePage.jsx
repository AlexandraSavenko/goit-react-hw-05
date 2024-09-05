import { useEffect, useState } from "react";
import fetchdata from "../fetchdata";
export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function fetchedData() {
      const data = await fetchdata(1, "", "trending/movie/day?language=en-US");
      setTrendingMovies(data.results);
    }
    fetchedData();
  }, []);
  console.log(trendingMovies);

  return (
    <div>
      <h2>Trending films</h2>
    </div>
  );
}
