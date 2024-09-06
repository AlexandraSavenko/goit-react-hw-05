import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../fetchdata";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchMovieData() {
      const data = await getMovie(movieId);
      setMovieData(data);
      const movieGen = data.genres.map((genre) => genre.name).join(", ");
      setGenres(movieGen);
      const userScore = Math.round(data.popularity);
      setScore(`User score: ${userScore}%`);
    }
    fetchMovieData();
  }, [movieId]);
  console.log(movieData);
  console.log(score);

  return (
    movieData && (
      <div>
        <button>Go back</button>
        <div>
          <img src="" alt="" />
          <ul>
            <li>
              <h2>{movieData.original_title}</h2>
            </li>
            <li>
              <p>{score}</p>
            </li>
            <li>
              <h3>Overview</h3>
            </li>
            <li>
              <p>{movieData.overview}</p>
            </li>
            <li>
              <h4>Geners</h4>
            </li>
            <li>
              <p>{genres}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}
