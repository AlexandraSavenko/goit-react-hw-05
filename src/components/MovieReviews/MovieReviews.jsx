import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "../../fetchdata";
import RevList from "../RevList/RevList";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await getInfo(movieId, "reviews");
        setMovieReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {error && <b>Sorry, something went wrong. Please, try again!</b>}
      {loading && <b>LOADING...</b>}
      <ul className={css.list}>
        {movieReviews.length > 0 ? (
          movieReviews.map((rev, index) => (
            <li className={css.item} key={rev.id || index}>
              <RevList info={rev} />
            </li>
          ))
        ) : (
          <p>
            We don’t have any reviews for this movie, but we hope you could
            leave one after you watch the film 🍿 😁
          </p>
        )}
      </ul>
    </div>
  );
}
