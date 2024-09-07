import { useEffect, useState } from "react";
import { getInfo } from "../../fetchdata";
import { useOutletContext } from "react-router-dom";
import CastList from "../CastList/CastList";
import css from "./MovieCast.module.css";
export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useOutletContext();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await getInfo(movieId, "credits");
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {error && <b>Error!!!</b>}
      {loading && <b>LOADING...</b>}

      <ul className={css.list}>
        {movieCast.length > 0 ? (
          movieCast.map((actor, index) => (
            <li className={css.item} key={actor.id || index}>
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
