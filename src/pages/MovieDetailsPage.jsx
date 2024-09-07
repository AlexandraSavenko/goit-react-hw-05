import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovie } from "../fetchdata";
import css from "../css/MovieDetailsPage.module.css";
import NotFoundPage from "./NotFoundPage";
import clsx from "clsx";
export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
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
        const userScore = Math.floor(data.vote_average);
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
  function linksActive(props) {
    return clsx(css.link, props.isActive && css.isActive);
  }

  return (
    movieData && (
      <div className={css.wrap}>
        <Link to={backLinkRef.current ?? "/"}>Go back</Link>
        <div className={css.movieInfoWrap}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
            alt="movie_poster"
          />
          <ul>
            <li>
              <h2>
                {movieData.original_title}{" "}
                <span>{`(${Number.parseInt(movieData.release_date)})`}</span>
              </h2>
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
        <div className={css.addWrap}>
          <p>Additional information:</p>
          <ul className={css.addList}>
            <NavLink className={linksActive} to="cast">
              Cast
            </NavLink>
            <NavLink className={linksActive} to="reviews">
              Reviews
            </NavLink>
          </ul>
          <Outlet context={{ movieId }} />
        </div>
      </div>
    )
  );
}
