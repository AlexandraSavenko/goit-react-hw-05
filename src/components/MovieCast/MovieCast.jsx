import { useEffect, useState } from "react";
import { getInfo } from "../../fetchdata";
import { useParams } from "react-router-dom";
import CastList from "../CastList/CastList";
import css from "./MovieCast.module.css";
export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await getInfo(movieId, "credits");
        setMovieCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {error && <b>Sorry, something went wrong. Please, try again!</b>}
      {loading && <b>LOADING...</b>}

      <ul className={css.list}>
        {movieCast.length > 0 ? (
          movieCast.map((actor) => (
            <li className={css.item} key={actor.id}>
              {<CastList info={actor} />}
            </li>
          ))
        ) : (
          <p>Sorry, but we don`t have information about the cast☹️ </p>
        )}
      </ul>
    </div>
  );
}
