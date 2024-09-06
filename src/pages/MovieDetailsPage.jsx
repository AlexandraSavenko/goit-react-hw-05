import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getMovie } from "../fetchdata";
import css from "../css/MovieDetailsPage.module.css";
import NotFoundPage from "./NotFoundPage";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(0);
  const [posterPath, setPosterPath] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovie(movieId);
        setMovieData(data);
        const movieGen = data.genres.map((genre) => genre.name).join(", ");
        setGenres(movieGen);
        const userScore = Math.round(data.popularity);
        setScore(`User score: ${userScore}%`);
        setPosterPath(data.poster_path);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieData();
  }, [movieId]);
  if (error) {
    return <NotFoundPage />;
  }
  if (loading) {
    return <b>Loading...</b>;
  }

  return (
    movieData && (
      <div className={css.wrap}>
        <button>Go back</button>
        <div className={css.movieInfoWrap}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
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
        <div>
          <p>Additional information:</p>
          <ul className={css.addList}>
            <NavLink to="MovieCast">Cast</NavLink>
            <NavLink to="MovieReviews">Reviews</NavLink>
          </ul>
        </div>
      </div>
    )
  );
}
