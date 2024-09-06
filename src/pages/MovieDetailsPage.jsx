import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../fetchdata";
import css from "../css/MovieDetailsPage.module.css";
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
      <div className={css.wrap}>
        <button>Go back</button>
        <div className={css.movieInfoWrap}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieData.poster_path}`}
            alt="movie_poster"
          />
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
