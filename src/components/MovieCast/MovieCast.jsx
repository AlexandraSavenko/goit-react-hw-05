import { useEffect, useState } from "react";
import { getInfo } from "../../fetchdata";
import { useOutletContext } from "react-router-dom";
import CastList from "../CastList/CastList";
import css from "./MovieCast.module.css";
export default function MovieCast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useOutletContext();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await getInfo(movieId, "credits");
        setMovieCast(data.cast);
      } catch (error) {}
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {movieCast &&
        movieCast.length > 0 &&
        movieCast.map((actor, index) => (
          <li className={css.item} key={actor.id || index}>
            {<CastList info={actor} />}
          </li>
        ))}
    </ul>
  );
}
